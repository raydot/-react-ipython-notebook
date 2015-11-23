'use strict';

var React = require('react');

var InputPrompt = function InputPrompt(props) {
  return React.createElement(
    'div',
    { className: 'ipynbInput-prompt' },
    'In [' + (props.execution_count || ' ') + ']:'
  );
};

InputPrompt.propTypes = {
  execution_count: React.PropTypes.number
};

module.exports = InputPrompt;