'use strict'

var React = require('react')
var mdast = require('mdast')
var reactRenderer = require('mdast-react')

var TextCell = (props) => {
  var source = props.data.source.reduce((text, line) =>
    (text + line.replace(/^(#{1,6})([^#\s])/, '$1 $2'))
  , '')

  return (
    <div className='cell text_cell'>
      <div className='prompt input_prompt'/>
      <div className='inner_cell'>{mdast().use(reactRenderer).process(source)}</div>
    </div>
  )
}

TextCell.propTypes = {
  data: React.PropTypes.object
}

module.exports = TextCell
