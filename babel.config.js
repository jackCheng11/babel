module.exports = function(api){
    api.cache(true);

    presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    ie: 8
                },
                useBuiltIns: "usage"
            }
        ]
    ],
    plugins = []

    return {
        presets,
        plugins
    }
}