'use strict';

var React = require('react');

var IPythonNotebookRawCell = function IPythonNotebookRawCell(props) {
  return React.createElement('div', { className: 'ipynbCell--raw' });
};

module.exports = IPythonNotebookRawCell;