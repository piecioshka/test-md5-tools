const plugins = new Map();

plugins.set('crypto-js', require('./crypto-js'));
plugins.set('js-md5', require('./js-md5'));

module.exports = {
    plugins
};
