/* global describe, it, beforeEach */

'use strict'

import React from 'react'
import { assert } from 'chai'
import { render } from '../util'
import OutputPrompt from '../../src/prompts/output'

describe('OutputPrompt', () => {
  var output

  it('generates a div', () => {
    output = render(<OutputPrompt/>)
    assert.equal(output.type, <div/>.type)
  })

  it('has class "ipynbOutputPrompt"', () => {
    output = render(<OutputPrompt/>)
    assert.match(output.props.className, /\bipynbOutputPrompt\b/)
  })

  it('has children "Out [##]:"', () => {
    output = render(<OutputPrompt execution_count={42}/>)
    assert.match(output.props.children, /Out \[42\]:/)
  })

  it('no number yields "Out [ ]:"', () => {
    output = render(<OutputPrompt/>)
    assert.match(output.props.children, /Out \[ \]:/)
  })
})
