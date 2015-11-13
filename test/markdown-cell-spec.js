/* global describe, it, beforeEach */

'use strict'

import React from 'react'
import { assert } from 'chai'
import { render } from './util'
import MarkdownCell from '../src/markdown-cell'

import mdcell from './fixtures/cells/markdown'

describe('MarkdownCell', () => {
  var output

  beforeEach(() => {
    output = render(<MarkdownCell data={mdcell}/>)
  })

  it('generates a div', () => {
    assert.equal(output.type, <div/>.type)
  })

  it('has class "ipynbCell--text"', () => {
    assert.match(output.props.className, /\bipynbCell--text\b/)
  })

  it('renders the markdown content', () => {
    var expectedOutput = {__html: '<h1>test</h1>\n<p>$$y = x$$</p>\n'}
    assert.deepEqual(output.props.dangerouslySetInnerHTML, expectedOutput)
  })
})
