#!/usr/bin/env node

var path = require('path'),
    express = require('express'),
    webpack = require('webpack');

var webpackConfig = require('./webpack.config'),
    compiler = webpack(webpackConfig),
    app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8989, '0.0.0.0', function() {});
