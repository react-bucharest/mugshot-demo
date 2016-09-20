var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Button',

  render: function() {
    return <button>{this.props.label}</button>;
  }
});
