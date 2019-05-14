const ora = require('ora');
const humanReadable = require('what-time');
const ONE_SECOND = 1000;

let spinner = null;
let startTime = null;

function recordResult(r) {
    return `${r.string}:\n${r.result.map((d) => `\t - ${d.libName}: ${d.hash}`).join('\n')}`;
}

const logger = {
    start() {
        if (!process.env.TRAVIS) {
            spinner = ora('Loading...').start();
        }
        startTime = Date.now();
    },
    record(record, iterations) {
        if (!process.env.TRAVIS) {
            spinner.text = `Testing phrase: '${record}' (iterations: ${iterations})`;
            spinner.render();
        }
    },
    completed(iterations) {
        if (!process.env.TRAVIS) {
            spinner.stop();
        }
        const diff = humanReadable((Date.now() - startTime) / ONE_SECOND);
        console.log(`Time duration: ${diff}`);
        console.log(`Number of iterations: ${iterations}`);
    },
    completedOk() {
        console.log('Testing completed. All results are correct.');
    },
    completedFailure(differences) {
        console.log('Differences found:');
        const results = differences
            .map((r) => recordResult(r))
            .join('\n');
        console.log(results);
    }
}

module.exports = {
    logger
};
