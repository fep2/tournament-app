const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const moduleObj = {
    rules:[
    {
        test:  /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader:"babel-loader",
        options: {
            presets: ['@babel/preset-env']
        },
    }],
};

const client = {
    mode: 'production',
    entry:{
        'client': './src/client/index.js'
    },
    target: 'web',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj,
    plugins: [
            new HtmlWebPackPlugin({
                      template: 'src/client/index.html'})]
};

const server = {
    mode: 'production',
    entry:{
        'server': './src/server/index.js'
    },
    target: 'node',
        output:{
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
    },
    module:moduleObj,
    externals: [nodeExternals()]

};

module.exports = [client, server];


