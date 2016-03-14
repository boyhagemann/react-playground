path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    //entry: './src/main.jsx',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'client.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            },
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    }
};