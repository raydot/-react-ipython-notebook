'use strict';

var React = require('react');

var OutputPrompt = function OutputPrompt(props) {
  return React.createElement(
    'div',
    { className: 'ipynbOutputPrompt' },
    'Out [' + (props.execution_count || ' ') + ']:'
  );
};

module.exports = OutputPrompt;