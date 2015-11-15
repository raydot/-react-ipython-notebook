'use strict'

var React = require('react')

var OutputPrompt = (props) => (
  <div className='ipynbOutput-prompt'>
    {`Out [${props.execution_count || ' '}]:`}
  </div>
)

module.exports = OutputPrompt
