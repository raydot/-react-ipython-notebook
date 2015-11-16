'use strict';

var React = require('react');
var mdast = require('mdast');
var reactRenderer = require('mdast-react');

var MarkdownCell = function MarkdownCell(props) {
  var source = props.data.source.reduce(function (text, line) {
    return text + line.replace(/^(#{1,6})([^#\s])/, '$1 $2');
  }, '');

  return React.createElement(
    'div',
    { className: 'ipynbCell--text' },
    mdast().use(reactRenderer).process(source)
  );
};

module.exports = MarkdownCell;