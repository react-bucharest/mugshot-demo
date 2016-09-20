var React = require('react/addons'),
    classNames = require('classnames');

require('./button.less');

module.exports = React.createClass({
  displayName: 'Button',

  render: function() {
    var buttonClasses = classNames('button', this.props.className);

    return <button className={buttonClasses}
                   onClick={this.props.onClick}>
      {this.props.label}
    </button>;
  }
});
