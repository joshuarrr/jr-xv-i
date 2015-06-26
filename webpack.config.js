 var webpack = require('webpack');
 var path = require('path');
 var bower_dir = path.join(__dirname, 'bower_components');
 var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(path);
    },
    context: __dirname,
    entry: {
        app: ['webpack/hot/dev-server?http://localhost:8080', './app/main.js']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [node_modules_dir]
        }, {
            test: /\.jsx$/,
            loader: 'react-hot-loader!babel-loader',
            exclude: [node_modules_dir]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: "style!css!sass?outputStyle=expanded&" +
            "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
        }, {
            test: /\.(woff|png|jpeg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app', null, false)
    ]
};

module.exports = config;
