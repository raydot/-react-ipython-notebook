'use strict';

var React = require('react');

var CodeCell = function CodeCell(props) {
  return React.createElement('div', { className: 'ipynbCell--code' });
};

module.exports = CodeCell;