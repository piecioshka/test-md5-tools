'use strict';

const md5 = require('js-md5');

function encode(string) {
    return md5(string);
}

module.exports = {
    encode
};
