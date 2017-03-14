
module.exports = {
    entry: "./js/main",
    output: {
        path: "build",
        library: "main",
        filename: "main.webpack.js"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015'
        }]
    },

    watch: true
};