const webpack = require('webpack');
module.exports = {
    entry: {
        main: `${__dirname}/js/main.js`,
      ticket_list: `${__dirname}/js/entry/ticket_list.js`,
      ticket_register: `${__dirname}/js/entry/ticket_register.js`
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
                `${__dirname}/js/vendor`,
                `${__dirname}/js/server.js`
            ],
            loader: 'babel-loader',
            query: {
                presets: ["es2015", "react"]
            }
        }],
    },
    devtool: 'inline-source-map'
};
