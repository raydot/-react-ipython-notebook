'use strict'

import fs from 'fs'
import process from 'process'
import IPythonNotebook from '../../lib'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

var input = JSON.parse(fs.readFileSync(process.argv[2]))

console.log(ReactDOMServer.renderToString(<IPythonNotebook data={input}/>))
