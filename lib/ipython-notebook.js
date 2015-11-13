'use strict';

var React = require('react');
var MarkdownCell = require('./markdown-cell');
var CodeCell = require('./code-cell');
var RawCell = require('./raw-cell');

function renderCell(cell, i) {
  var Cell = ({
    markdown: MarkdownCell,
    code: CodeCell,
    raw: RawCell
  })[cell.cell_type];

  return React.createElement(Cell, {
    data: cell,
    key: 'ipnyb-cell-' + (i + 1)
  });
}

var IPythonNotebook = function IPythonNotebook(props) {
  return React.createElement(
    'div',
    { className: 'ipynb' },
    props.data.cells.map(renderCell)
  );
};

module.exports = IPythonNotebook;