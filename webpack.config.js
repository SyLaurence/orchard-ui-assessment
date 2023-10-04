const path = require('path')

module.exports = {
    entry: "./app/src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" }
        ]
    },
    resolve: {
        extensions: [".js", "..."]
    },
    mode: 'production'
}