'use strict';

var React = require('react');

var IPythonNotebookCodeCell = function IPythonNotebookCodeCell(props) {
  return React.createElement('div', { className: 'ipynbCell--code' });
};

module.exports = IPythonNotebookCodeCell;