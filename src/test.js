
function test(plugins, differences, string) {
    const result = [];

    plugins.forEach(({ encode }, libName) => {
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

module.exports = {
    test
};
