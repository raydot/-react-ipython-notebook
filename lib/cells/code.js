'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _promptsInput = require('../prompts/input');

var _promptsInput2 = _interopRequireDefault(_promptsInput);

var _promptsOutput = require('../prompts/output');

var _promptsOutput2 = _interopRequireDefault(_promptsOutput);

var CodeCell = function CodeCell(props) {
  return _react2['default'].createElement(
    'div',
    { className: 'ipynbCell--code' },
    _react2['default'].createElement(
      'div',
      { className: 'ipynbInput' },
      _react2['default'].createElement(_promptsInput2['default'], { execution_count: props.data.execution_count }),
      _react2['default'].createElement(
        'div',
        { className: 'ipynbInput-inner' },
        _react2['default'].createElement(
          'pre',
          null,
          _react2['default'].createElement(
            'code',
            null,
            props.data.source.join('')
          )
        )
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: 'ipynbOutput' },
      _react2['default'].createElement(_promptsOutput2['default'], { execution_count: props.data.execution_count }),
      _react2['default'].createElement(
        'div',
        { className: 'ipynbOutput-inner' },
        props.data.outputs.map(function (o, i) {
          console.log(o, i);
          if (!o.data) return;
          return _react2['default'].createElement(
            'pre',
            { key: 'output-' + i },
            _react2['default'].createElement(
              'code',
              null,
              (o.data['text/plain'] || []).join('')
            )
          );
        })
      )
    )
  );
};

module.exports = CodeCell;