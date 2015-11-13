'use strict';

var React = require('react');
var Remarkable = require('remarkable');

var md = new Remarkable();

var IPythonNotebookMarkdownCell = function IPythonNotebookMarkdownCell(props) {
  return React.createElement('div', {
    className: 'ipynbCell--text',
    dangerouslySetInnerHTML: { __html: md.render(props.data.source.join('')) }
  });
};

module.exports = IPythonNotebookMarkdownCell;