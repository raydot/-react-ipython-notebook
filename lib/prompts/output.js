'use strict';

var React = require('react');

var OutputPrompt = function OutputPrompt(props) {
  return React.createElement(
    'div',
    { className: 'ipynbOutput-prompt' },
    'Out [' + (props.execution_count || ' ') + ']:'
  );
};

OutputPrompt.propTypes = {
  execution_count: React.PropTypes.number
};

module.exports = OutputPrompt;