'use strict'

import fs from 'fs'
import process from 'process'
import IPythonNotebook from './'
import React from 'react'
import ReactDOMServer from 'react-dom'

ReactDOMServer.renderToString(<IPythonNotebook data={fs.readFileSync(process.argv[1])}/>)
