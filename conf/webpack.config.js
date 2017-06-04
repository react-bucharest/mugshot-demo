var filePaths = require('./file-paths.js'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(filePaths.src, 'app.js'),
  output: {
    path: filePaths.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: filePaths.src,
        loader: 'babel-loader'
      },
      {
        test: /\.less/,
        include: filePaths.src,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.join(filePaths.root, 'conf', 'index.html'),
    })
  ]
};
