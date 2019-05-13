'use strict';

const ora = require('ora');
const { generate } = require('brute-force-generator');

const { plugins } = require('../src/plugins');
const { test } = require('../src/test');

const differences = [];
const limits = Array.from({ length: 90 - 48 }).map((x, i) => i + 48);
const chars = limits.map((ascii) => String.fromCharCode(ascii));
chars.unshift('-', '_', '|', '!', '#', '&', '*');
const variations = 4; // max length of tested word

let spinner = null;

function recordResult(r) {
    return `${r.string}:\n${r.result.map((d) => `\t - ${d.libName}: ${d.hash}`).join('\n')}`;
}

function displayResults(iterations) {
    spinner.stop();

    console.log(`Number of iterations: ${iterations}`);

    if (differences.length > 0) {
        console.log('Differences found:');
        const results = differences
            .map((r) => recordResult(r))
            .join('\n');
        console.log(results);
        process.exit(1);
    } else {
        console.log('Testing completed. All results are correct.');
        process.exit(0);
    }
}

function main() {
    spinner = ora('Loading...').start();
    const gen = generate(chars, variations);
    let iterations = 0;

    for (const record of gen) {
        iterations++;
        spinner.text = `Testing phrase: '${record}' (iterations: ${iterations})`;
        spinner.render();
        test(plugins, differences, record);
    }

    displayResults(iterations);
}

main();
