'use strict'

var React = require('react')

var InputPrompt = (props) => (
  <div className='ipynbInput-prompt'>
    {`In [${props.execution_count || ' '}]:`}
  </div>
)

module.exports = InputPrompt
