'use strict';
const path = require('path');
const chai = require('chai');
const expect = require('chai').expect;
const Mugshot = require('mugshot');
const chaiMugshot = require('chai-mugshot');
const webdriverio = require('webdriverio');
const WebdriverIOAdapter = require('mugshot-webdriverio');
const LooksSameAdapter = require('mugshot-looks-same');

const BROWSER = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const VIEWPORT_SIZE = {
  width: 1024,
  height: 768
};

const COMPONENT_SELECTOR = '[class^="component-playground__preview"] > *';

// The time limit for a page to fully load:
// images, fonts, etc.
const LOAD_TIMEOUT = 2 * 1000;

exports.testVisuals = function(urls, firstBaseline, directory) {
  describe('Visual test suite', function() {
    let mugshotOptions = {
          acceptFirstBaseline: firstBaseline,
          differ: new LooksSameAdapter({tolerance: 3})
        },
        webdriverioInstance, browser;

    before(function(done) {
      webdriverioInstance = webdriverio.remote(BROWSER).init()
          .windowHandleSize(VIEWPORT_SIZE)
          .then(function() {
            browser = new WebdriverIOAdapter(webdriverioInstance);
            done();
          });
    });

    urls.forEach(function(item) {
      const component = item.component;
      const fixture = item.fixture;

      it(`should look OK on ${component} with fixture ${fixture}`,
          function() {
            let captureItem = {
                  name: fixture,
                  selector: COMPONENT_SELECTOR
                },
                _this = this;

            return webdriverioInstance.url(item.url)
                .then(function() {
                  mugshotOptions.rootDirectory = path.join(directory,
                      component);
                  let mugshot = new Mugshot(browser, mugshotOptions);
                  chai.use(chaiMugshot(mugshot, _this.test.ctx));

                  return expect(captureItem).to.be.identical;
                });
          });
    });

    after(function() {
      return webdriverioInstance.end();
    });
  });
};
