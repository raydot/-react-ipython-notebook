'use strict';

var React = require('react');
var Remarkable = require('remarkable');

var md = new Remarkable();

var MarkdownCell = function MarkdownCell(props) {
  return React.createElement('div', {
    className: 'ipynbCell--text',
    dangerouslySetInnerHTML: { __html: md.render(props.data.source.join('')) }
  });
};

module.exports = MarkdownCell;