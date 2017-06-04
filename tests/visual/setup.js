'use strict';
const filePaths = require('../../conf/file-paths.js');
const path = require('path');
const glob = require('glob');

const PLAYGROUND_URL = 'http://playground:8989/';
const COMPONENTS_DIR = filePaths.src;
const COMPONENTS_PATTERN = path.join('*', '__fixtures__', '**.js');

exports.getUrls = function(ignored) {
  const components = _getComponents(COMPONENTS_DIR, ignored);

  return components.map(_getUrlFromPath);
};

function _getComponents(dir, ignored) {
  const options = {
    cwd: dir,
    ignore: ignored.map(_getPathToFixturesFolder)
  };

  return glob.sync(COMPONENTS_PATTERN, options);
}

function _getUrlFromPath(pathToParse) {
  const component = path.dirname(pathToParse).split('/')[0];
  const fixture = path.basename(pathToParse, '.js');

  return {
    component: component,
    fixture: fixture,
    url: `${PLAYGROUND_URL}?component=${component}&fixture=${fixture}` +
          `&fullScreen=true`
  };
}

function _getPathToFixturesFolder(component) {
  return path.join(component, 'fixtures', '**.js');
}
