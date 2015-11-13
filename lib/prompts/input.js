'use strict';

var React = require('react');

var InputPrompt = function InputPrompt(props) {
  return React.createElement(
    'div',
    { className: 'ipynbInputPrompt' },
    'In [' + (props.execution_count || ' ') + ']:'
  );
};

module.exports = InputPrompt;