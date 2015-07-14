var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var customProperties = require('postcss-custom-properties');
var simpleVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var autoprefixer = require('autoprefixer-core');
var discardComments = require('postcss-discard-comments');
var simpleExtend = require('postcss-simple-extend');
var calc = require('postcss-calc');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];

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
    cssnext: {
        browsers: "last 2 versions",
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
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded&' +
            'includePaths[]=' +
                (path.resolve(__dirname, './node_modules', './app/scss'))
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader!cssnext-loader'
        }, {
            test: /\.(woff|png|jpeg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    postcss: function () {
        // The context of this function is the webpack loader-context
        // see: http://webpack.github.io/docs/loaders.html#loader-context
        return [
            cssimport({
                // see postcss-import docs to learn about onImport callback
                // https://github.com/postcss/postcss-import
                onImport: function (files) {
                    files.forEach(this.addDependency);
                }.bind(this)
            }),
            discardComments,
            mixins,
            simpleExtend,
            customProperties,
            simpleVars,
            nested,
            calc,
            autoprefixer(AUTOPREFIXER_BROWSERS)
        ];
    }
};

module.exports = config;