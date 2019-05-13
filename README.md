# test-md5-tools

[![dependencies](https://david-dm.org/piecioshka/test-md5-tools.svg)](https://github.com/piecioshka/test-md5-tools)
[![travis](https://img.shields.io/travis/piecioshka/test-md5-tools.svg)](https://travis-ci.org/piecioshka/test-md5-tools)
[![snyk](https://snyk.io/test/github/piecioshka/test-md5-tools/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/test-md5-tools?targetFile=package.json)

:ledger: Testing popular crypto libraries to check building MD5 hashes

## How to run tests?

```bash
npm start
```

## How to add a new library?

1. Create file: `src/plugins/[name]/*.js`
    + Module should export method `encode`
2. In file `src/plugins/index.js` export your custom plugin
3. Exec a command: `npm start`

## Related

* [dicts](https://github.com/piecioshka/dicts)
* [brute-force-generator](https://github.com/piecioshka/brute-force-generator)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
