'use strict';

const crypto = require('crypto-js');

function encode(string) {
    return crypto.MD5(string).toString();
}

module.exports = {
    encode
};

