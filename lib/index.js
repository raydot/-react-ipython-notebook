'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react');
var MarkdownCell = require('./cells/markdown');
var CodeCell = require('./cells/code');
var RawCell = require('./cells/raw');
// var ErrorCell = require('./cells/error')

function renderCell(cell, i) {
  var Cell = ({
    markdown: MarkdownCell,
    code: CodeCell,
    raw: RawCell
  })[cell.cell_type];

  if (!Cell) return;

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

exports.default = IPythonNotebook;