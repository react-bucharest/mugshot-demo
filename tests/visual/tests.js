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
  },
  host: 'selenium'
};

const VIEWPORT_SIZE = {
  width: 1024,
  height: 768
};

const COMPONENT_SELECTOR = '[class^="component-playground__frame"]';

// The time limit for a page to fully load:images, fonts, etc.
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
                // Set the time limit for the async script to finish.
                .timeoutsAsyncScript(LOAD_TIMEOUT)
                // Execute a script in the page context: wait until the fonts
                // are loaded.
                .executeAsync(function(done) {
                  // Check every 100ms if the page is ready i.e. the fonts.satus
                  // is 'loaded'.
                  let interval = setInterval(function() {
                    if (document.fonts.status === 'loaded') {
                      clearInterval(interval);
                      done();
                    }
                  }, 100);
                })
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
