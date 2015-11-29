'use strict'

import fs from 'fs'
import process from 'process'
import victorica from 'victorica'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

// Symlinked to ../lib for development:
import IPythonNotebook from 'react-ipython-notebook'

var input = JSON.parse(fs.readFileSync(process.argv[2]))
var output = ReactDOMServer.renderToStaticMarkup(<IPythonNotebook data={input}/>)
var beautifiedOutput = victorica(output)

process.stdout.write(beautifiedOutput)
