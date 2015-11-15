/* global describe, it */

'use strict'

import React from 'react'
import { assert } from 'chai'
import { render } from '../util'
import InputPrompt from '../../src/prompts/input'

describe('InputPrompt', () => {
  var output

  it('generates a div', () => {
    output = render(<InputPrompt/>)
    assert.equal(output.type, <div/>.type)
  })

  it('has class "ipynbInputPrompt"', () => {
    output = render(<InputPrompt/>)
    assert.match(output.props.className, /\bipynbInputPrompt\b/)
  })

  it('has children "In [##]:"', () => {
    output = render(<InputPrompt execution_count={42}/>)
    assert.match(output.props.children, /In \[42\]:/)
  })

  it('no number yields "In [ ]:"', () => {
    output = render(<InputPrompt/>)
    assert.match(output.props.children, /In \[ \]:/)
  })
})
