var React = require('react/addons'),
    classNames = require('classnames'),
    Button = require('../button');

require('./search-with-button.less');

module.exports = React.createClass({
  displayName: 'SearchWithButton',

  getDefaultProps: function() {
    return {
      placeholder: 'Search...'
    }
  },

  render: function() {
    return <div className="search-with-button">
      <input type="text" placeholder={this.props.placeholder}/>
      <Button label="Go" />
    </div>;
  }
});
