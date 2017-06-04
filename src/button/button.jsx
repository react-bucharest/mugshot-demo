import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';

import './button.less';

class Button extends PureComponent {
  render() {
    var buttonClasses = classNames('button', this.props.className);

    return (
      <button className={buttonClasses} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

Button.displayName = 'Button';

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
