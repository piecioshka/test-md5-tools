'use strict';

// const limits = Array.from({ length: 90 - 48 }).map((x, i) => i + 48);
// console.log(limits);

// const chars = limits.map((ascii) => String.fromCharCode(ascii));
const chars = ['a', 'b', 'c'];
console.log(chars);

function * generate() {
    const maxLevel = 3;
    const numberOfChars = chars.length;

    for (let level = 0; level < maxLevel; level++) {
        for (let row = 0; row < numberOfChars; row++) {
            let result = '';
            for (let index = 0; index < level; index++) {
                for (let charIdx = 0; charIdx < numberOfChars; charIdx++) {
                    const char = chars[charIdx];
                    result += char;
                    yield result;
                }
            }
        }
    }
}

module.exports = {
    generate
};
