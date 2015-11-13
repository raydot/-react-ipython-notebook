'use strict';

var React = require('react');

var IPythonNotebookCodeCell = function IPythonNotebookCodeCell(props) {
  return React.createElement('div', { className: 'ipynb__cell--code' });
};

module.exports = IPythonNotebookCodeCell;