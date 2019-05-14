'use strict';

const { generate } = require('brute-force-generator');

const { plugins } = require('../src/plugins');
const { test } = require('../src/test');
const { logger } = require('../src/logger');

const differences = [];
const limits = Array.from({ length: 90 - 48 }).map((x, i) => i + 48);
const chars = limits.map((ascii) => String.fromCharCode(ascii));
chars.unshift('-', '_', '|', '!', '#', '&', '*');
const variations = 3; // max length of tested word

function displayResults(iterations) {
    logger.completed(iterations);

    if (differences.length > 0) {
        logger.completedFailure(differences);
        process.exit(1);
    } else {
        logger.completedOk();
        process.exit(0);
    }
}

function main() {
    logger.start();

    const gen = generate(chars, variations);
    let iterations = 0;

    for (const record of gen) {
        iterations++;
        logger.record(record, iterations);
        test(plugins, differences, record);
    }

    displayResults(iterations);
}

main();
