'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('../prompts/input');

var _input2 = _interopRequireDefault(_input);

var _output = require('../prompts/output');

var _output2 = _interopRequireDefault(_output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Highlight from 'react-highlight'

// <Highlight key={`output-${i}`} className="python">{(o.data['text/plain'] || []).join('')}</Highlight>

var CodeCell = function CodeCell(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ipynbCell--code' },
    _react2.default.createElement(
      'div',
      { className: 'ipynbInput' },
      _react2.default.createElement(_input2.default, { execution_count: props.data.execution_count }),
      _react2.default.createElement(
        'div',
        { className: 'ipynbInput-inner' },
        _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            props.data.source.join('')
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'ipynbOutput' },
      _react2.default.createElement(_output2.default, { execution_count: props.data.execution_count }),
      _react2.default.createElement(
        'div',
        { className: 'ipynbOutput-inner' },
        props.data.outputs.map(function (o, i) {
          if (!o.data) return;
          return _react2.default.createElement(
            'pre',
            { key: 'output-' + i, className: 'python' },
            _react2.default.createElement(
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