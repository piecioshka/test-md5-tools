# test-md5-tools

:ledger: Testing popular crypto libraries to check building MD5 hashes

## How to run tests?

```bash
npm test
```

## How to add a new library?

1. Create file: `src/plugins/[name]/*.js`
    + Module should export one method `encode()`
2. In file `src/plugins/index.js` export your custom plugin
3. Exec a command: `npm start`

## Iterations

* for max length word = 1 — `49`
* for max length word = 2 — `2 450`
* for max length word = 3 — `120 099`
* for max length word = 4 — `5 884 900`

## Related

* [dicts](https://github.com/piecioshka/dicts)
* [brute-force-generator](https://github.com/piecioshka/brute-force-generator)

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
