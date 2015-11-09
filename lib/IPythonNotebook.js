'use strict'

import React from 'react'
import IPythonNotebookMarkdownCell from './IPythonNotebookMarkdownCell'
import IPythonNotebookCodeCell from './IPythonNotebookCodeCell'
import IPythonNotebookRawCell from './IPythonNotebookRawCell'

function renderCell (cell, i) {
  var IPythonNotebookCell = {
    markdown: IPythonNotebookMarkdownCell,
    code: IPythonNotebookCodeCell,
    raw: IPythonNotebookRawCell
  }[cell.cell_type]

  return (
    <IPythonNotebookCell data={cell} key={`ipython-notebook-cell-${i}`}/>
  )
}

var IPythonNotebook = (props) => (
  <IPythonNotebook className='ipynb'>
    { props.data.cells.map(renderCell) }
  </IPythonNotebook>
)

export default IPythonNotebook
