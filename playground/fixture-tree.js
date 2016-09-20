var _ = require('lodash');


/**
 * A list of fixtures for a component.
 * @typedef {Object} FixtureList
 *
 * @property {ReactClass} class The component in question.
 * @property {Fixture[]} fixtures
 */

/**
 * A fixture detailing the state of a component.
 * @typedef {Object.<String, Object>} Fixture
 */

/**
 * @returns {Object.<String, FixtureList>} The keys are the names of the
 *     component files.
 */
exports.getComponents = function() {
  var requireComponent =
          require.context('src', true, /^\.\/([a-z-]+)\/index\.js$/),
      components = {};

  requireComponent.keys().forEach(function(componentPath) {
    var componentName = componentPath.match(/^\.\/([a-z-]+)\/index\.js$/)[1];

    // Fixtures are grouped per component.
    components[componentName] = {
      class: requireComponent(componentPath),
      fixtures: _getFixturesForComponent(componentName)
    };

    // Allow users to browse components before creating fixtures.
    if (_.isEmpty(components[componentName].fixtures)) {
      components[componentName].fixtures['auto-empty'] = {};
    }
  });

  return components;
};


function _getFixturesForComponent(componentName) {
  var isFixture = /^.\/([a-z-]+)\/fixtures\/([a-z-]+).js/,
      requireFixture = require.context(
          // Can't use isFixture because webpack can't statically analyse.
          'src', true, /^.\/([a-z-]+)\/fixtures\/([a-z-]+).js/),
      fixtures = {};

  requireFixture.keys().forEach(function(fixturePath) {
    var fixtureComponentName = fixturePath.match(isFixture)[1],
        fixtureName = fixturePath.match(isFixture)[2];

    if (fixtureComponentName !== componentName) {
      return;
    }

    fixtures[fixtureName] = requireFixture(fixturePath);
  });

  return fixtures;
}
