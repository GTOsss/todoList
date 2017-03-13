'use strict';

module.exports = {
    entry: "./js/main",
    output: {
        path: "build",
        filename: "main.webpack.js"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]

    },
};