#!/usr/bin/env node

'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _victorica = require('victorica');

var _victorica2 = _interopRequireDefault(_victorica);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactIpythonNotebook = require('react-ipython-notebook');

var _reactIpythonNotebook2 = _interopRequireDefault(_reactIpythonNotebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = JSON.parse(_fs2.default.readFileSync(_process2.default.argv[2]));

// Symlinked to ../lib for development:
var output = _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactIpythonNotebook2.default, { data: input }));
var beautifiedOutput = (0, _victorica2.default)(output);

_process2.default.stdout.write(beautifiedOutput);

