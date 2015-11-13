/* global describe, it, beforeEach */

'use strict'

import React from 'react'
import { assert } from 'chai'
import { render } from './util'
import CodeCell from '../src/code-cell'

import mdcell from './fixtures/cells/code'

describe('CodeCell', () => {
  var output

  beforeEach(() => {
    output = render(<CodeCell data={mdcell}/>)
  })

  it('generates a div', () => {
    assert.equal(output.type, <div/>.type)
  })

  it('has class "ipynbCell--code"', () => {
    assert.match(output.props.className, /\bipynbCell--code\b/)
  })
})
