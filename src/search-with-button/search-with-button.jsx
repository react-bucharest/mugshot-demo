import React, {PureComponent} from 'react';
import Button from '../button';
import classNames from 'classnames';

import './search-with-button.less';

class SearchWithButton extends PureComponent {
  render() {
    return (
      <div className="search-with-button">
        <input type="text" placeholder={this.props.placeholder} />
        <Button label="Go" />
      </div>
    );
  }
}

SearchWithButton.displayName = 'SearchWithButton';

SearchWithButton.propTypes = {
  placeholder: React.PropTypes.string
};

SearchWithButton.defaultProps = {
  placeholder: 'Search...'
};

export default SearchWithButton;
