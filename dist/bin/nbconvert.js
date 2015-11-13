'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var input = JSON.parse(_fs2['default'].readFileSync(_process2['default'].argv[2]));

console.log(_reactDomServer2['default'].renderToString(_react2['default'].createElement(_lib2['default'], { data: input })));