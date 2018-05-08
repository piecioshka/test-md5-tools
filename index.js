'use strict';

const { generate } = require('./src/brute-force-generator');

const libs = new Map();

libs.set('crypto-js', require('./src/plugins/crypto-js'));
libs.set('js-md5', require('./src/plugins/js-md5'));

// Tablica z frazami, które są inaczej kodowane przez różne biblioteki.
const differences = [];

function test(string) {
    const result = [];

    libs.forEach(({ encode }, libName) => {
        const hash = encode(string);
        result.push({
            hash,
            libName
        });
    });

    const uniqueResult = [...new Set(result.map((o) => o.hash))];

    if (uniqueResult.length > 1) {
        differences.push({
            string,
            result
        });
    }
}

// ----

console.log('Start testing...');
const generator = generate();

for (const value of generator) {
    console.log(`[*] testing phrase: '${value}'`);
    test(value);
}

if (differences.length > 0) {
    console.log('Problem with results, because differences are exist:');
    console.log(differences.map((r) => `${r.string}:\n${r.result.map((d) => `\t - ${d.libName}: ${d.hash}`).join('\n')}`).join('\n'));
} else {
    console.log('All results are fine');
}
