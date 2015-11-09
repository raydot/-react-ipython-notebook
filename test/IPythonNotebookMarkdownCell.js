/* global describe, it, beforeEach */

'use strict'

import React from 'react'
import { assert } from 'chai'
import { render } from './util'
import IPythonNotebookMarkdownCell from '../lib/IPythonNotebookMarkdownCell'

import mdcell from './fixtures/cells/markdown'

describe('IPythonNotebookMarkdownCell', () => {
  var output

  beforeEach(() => {
    output = render(<IPythonNotebookMarkdownCell data={mdcell}/>)
  })

  it('generates a div', () => {
    assert.equal(output.type, <div/>.type)
  })

  it('has class "ipynb__cell--text"', () => {
    assert.match(output.props.className, /\bipynb__cell--text\b/)
  })

  it('renders the markdown content', () => {
    var expectedOutput = '<h1>test</h1>\n<p>$$y = x$$</p>\n'
    assert.equal(output.props.dangerouslySetInnerHTML, expectedOutput)
  })
})
