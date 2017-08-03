module.exports = {
    entry: {
        main: `${__dirname}/js/main.js`
    },
    output: {
        filename: '[name]-pack.js',
        path: `${__dirname}/js-build`,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                `${__dirname}/js`
            ],
            exclude: [
                `${__dirname}/js/vendor`
            ],
            loader: 'babel-loader',
            query: {
                presets: ["es2015", "react"]
            }
        }],
    },
    devtool: 'inline-source-map'
};
