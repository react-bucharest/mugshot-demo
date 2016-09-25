var path = require('path'),
    webpack = require('webpack'),
    config = require('../conf/file-paths.js'),
    rootPath = config.root,
    argv = require('yargs').argv;

var config = {
  devtool: 'cheap-module-sourcemap',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'index.js')
  ],

  output: {
    libraryTarget: 'umd',
    library: 'cosmosRouter',
    filename: 'playground.js',
    path: path.join(rootPath, 'build'),
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      src: path.join(rootPath, 'src')
    }
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['react-transform'],
        extra: {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }
        }
      }
    }],

    loaders: [{
      test: /\.less$/,
      loader: 'style!css!postcss!less'
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
