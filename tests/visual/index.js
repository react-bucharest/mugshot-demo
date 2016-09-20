'use strict';
const setup = require('./setup.js');
const test = require('./tests.js');

// components to be ignored
const ignored = ['blurrable'];

const options = {
  isFirstBaseline: true,
  isNotFirstBaseline: false
};

test.testVisuals(setup.getUrls(ignored), options.isFirstBaseline,
    'tests/visual/visual-test');
