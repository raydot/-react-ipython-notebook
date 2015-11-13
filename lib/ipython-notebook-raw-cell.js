'use strict';

var React = require('react');

var IPythonNotebookRawCell = function IPythonNotebookRawCell(props) {
  return React.createElement('div', { className: 'ipynb__cell--raw' });
};

module.exports = IPythonNotebookRawCell;