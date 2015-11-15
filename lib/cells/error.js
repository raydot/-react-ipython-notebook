'use strict';

var React = require('react');

var ErrorCell = function ErrorCell(props) {
  return React.createElement(
    'div',
    { className: 'ipynbCell--error' },
    undefined.props.message
  );
};

module.exports = ErrorCell;