'use strict'

var React = require('react')
var mdast = require('mdast')
var reactRenderer = require('mdast-react')

var MarkdownCell = (props) => {
  var source = props.data.source.reduce((text, line) =>
    (text + line.replace(/^(#{1,6})([^#\s])/, '$1 $2'))
  , '')

  return (
    <div className='ipynbCell--text'>
      {mdast().use(reactRenderer).process(source)}
    </div>
  )
}

module.exports = MarkdownCell
