var path = require('path');

module.exports = {
    entry: "./demo/demo.js",
    output: {
        path: './demo/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}