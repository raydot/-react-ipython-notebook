'use strict';

var React = require('react');
var mdast = require('mdast');
var reactRenderer = require('mdast-react');

var TextCell = function TextCell(props) {
  var source = props.data.source.reduce(function (text, line) {
    return text + line.replace(/^(#{1,6})([^#\s])/, '$1 $2');
  }, '');

  return React.createElement(
    'div',
    { className: 'cell text_cell' },
    React.createElement('div', { className: 'prompt input_prompt' }),
    React.createElement(
      'div',
      { className: 'inner_cell' },
      mdast().use(reactRenderer).process(source)
    )
  );
};

TextCell.propTypes = {
  data: React.PropTypes.object
};

module.exports = TextCell;