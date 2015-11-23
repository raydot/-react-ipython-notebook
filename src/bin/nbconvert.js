'use strict'

import fs from 'fs'
import process from 'process'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import IPythonNotebook from 'react-ipython-notebook'
import victorica from 'victorica'

var input = JSON.parse(fs.readFileSync(process.argv[2]))

var output = ReactDOMServer.renderToStaticMarkup(<IPythonNotebook data={input}/>)

var beautifiedOutput = victorica(output)

process.stdout.write(beautifiedOutput)
