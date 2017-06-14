var data = [
  {
    "title": "",
    "indent": 0,
    "tests": []
  },
  {
    "title": "Visual test suite",
    "indent": 1,
    "tests": [
      {
        "title": "should look OK on button with fixture base",
        "state": "failed",
        "result": {
          "isEqual": false,
          "baseline": "../../tests/visual/visual-test/button/base.png",
          "screenshot": "../../tests/visual/visual-test/button/base.new.png",
          "diff": "../../tests/visual/visual-test/button/base.diff.png"
        },
        "error": {
          "name": "AssertionError",
          "message": "expected baseline and screenshot of 'base' ([class^=\"component-playground__frame\"]) to be identical"
        },
        "duration": 3410
      },
      {
        "title": "should look OK on button with fixture blue-button",
        "state": "passed",
        "result": {
          "isEqual": true,
          "baseline": "../../tests/visual/visual-test/button/blue-button.png"
        },
        "duration": 893
      },
      {
        "title": "should look OK on search-with-button with fixture base",
        "state": "failed",
        "result": {
          "isEqual": false,
          "baseline": "../../tests/visual/visual-test/search-with-button/base.png",
          "screenshot": "../../tests/visual/visual-test/search-with-button/base.new.png",
          "diff": "../../tests/visual/visual-test/search-with-button/base.diff.png"
        },
        "error": {
          "name": "AssertionError",
          "message": "expected baseline and screenshot of 'base' ([class^=\"component-playground__frame\"]) to be identical"
        },
        "duration": 1005
      },
      {
        "title": "should look OK on search-with-button with fixture custom-placeholder",
        "state": "failed",
        "result": {
          "isEqual": false,
          "baseline": "../../tests/visual/visual-test/search-with-button/custom-placeholder.png",
          "screenshot": "../../tests/visual/visual-test/search-with-button/custom-placeholder.new.png",
          "diff": "../../tests/visual/visual-test/search-with-button/custom-placeholder.diff.png"
        },
        "error": {
          "name": "AssertionError",
          "message": "expected baseline and screenshot of 'custom-placeholder' ([class^=\"component-playground__frame\"]) to be identical"
        },
        "duration": 1116
      }
    ]
  }
];