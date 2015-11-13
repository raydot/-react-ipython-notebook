'use strict';

var React = require('react');

var RawCell = function RawCell(props) {
  return React.createElement('div', { className: 'ipynbCell--raw' });
};

module.exports = RawCell;