# mugshot-demo

*Visual regression testing demo with [Mugshot](https://github.com/uberVU/mugshot) and [React Component Playground](https://github.com/skidding/react-component-playground)*

## How to run

- Install required packages
  ```bash
  npm install
  ```

- Install [selenium-standalone](https://github.com/vvo/selenium-standalone) and start a server
  ```bash
  npm install selenium-standalone@latest -g
  selenium-standalone install
  selenium-standalone start
  ```

- Run a Component Playground instance locally
  ```bash
  npm run playground
  ```
  The visual test suite will iterate through each component/fixture pair in the playground and check for differences.

- Run the visual test suite
  ```bash
  npm run test:visual
  ```
  This will generate the baseline screenshots the first time and will check for differences in subsequent runs.

- Make a change to the styles of any component (ex: [button.less](https://github.com/react-bucharest/mugshot-demo/blob/master/src/button/button.less)) and re-run the tests. 

- Finally inspect the diffs inside the reporter by opening `visual-report/statics/index.html` in any browser.
![visual test reporter](assets/reporter.gif)
