import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import SearchWithButton from './search-with-button';

ReactDOM.render(
  <Button
    label="don't mind me"
    onClick={() => alert('seriously, buzz off!')}
  />,
  document.getElementById('root')
);
