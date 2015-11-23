'use strict'

var React = require('react')

var InputPrompt = (props) => (
  <div className='ipynbInput-prompt'>
    {`In [${props.execution_count || ' '}]:`}
  </div>
)

InputPrompt.propTypes = {
  execution_count: React.PropTypes.number
}

module.exports = InputPrompt
