'use strict'

var React = require('react')

var ErrorCell = (props) => (
  <div className='ipynbCell--error'>
    {this.props.message}
  </div>
)

module.exports = ErrorCell
