'use strict'

import fs from 'fs'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import IPythonNotebook from 'react-ipython-notebook'

var input = JSON.parse(fs.readFileSync(process.argv[2]))

console.log(ReactDOMServer.renderToStaticMarkup(<IPythonNotebook data={input}/>))
