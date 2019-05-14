'use strict';

const { generate } = require('brute-force-generator');

const { plugins } = require('../src/plugins');
const { test } = require('../src/test');
const { logger } = require('../src/logger');

const differences = [];
const chars = buildChars();
const VARIATIONS = 4; // max length of tested word
const ERROR_CODE_DIFFERENCES_EXIST = 1;

function buildChars() {
    const limits = Array.from({ length: 90 - 48 }).map((x, i) => i + 48);
    const chars = limits.map((ascii) => String.fromCharCode(ascii));
    chars.unshift('-', '_', '|', '!', '#', '&', '*');
    return chars;
}

function displayResults(iterations) {
    logger.completed(iterations);

    if (differences.length > 0) {
        logger.completedFailure(differences);
        process.exit(ERROR_CODE_DIFFERENCES_EXIST);
    } else {
        logger.completedOk();
    }
}

function main() {
    logger.start();

    const gen = generate(chars, VARIATIONS);
    let iterations = 0;

    for (const record of gen) {
        iterations++;
        logger.record(record, iterations);
        test(plugins, differences, record);
    }

    displayResults(iterations);
}

main();
