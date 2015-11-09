'use strict'

import React from 'react'
import Remarkable from 'remarkable'

var md = new Remarkable()

var IPythonNotebookMarkdownCell = (props) => (
  <div className='ipynb__cell--markdown' dangerouslySetInnerHTML={md.render(props.data.source.join(''))}>
  </div>
)

export default IPythonNotebookMarkdownCell
