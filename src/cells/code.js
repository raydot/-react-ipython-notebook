'use strict'

import React from 'react'
import InputPrompt from '../prompts/input'
import OutputPrompt from '../prompts/output'

var CodeCell = (props) => (
  <div className='ipynbCell--code'>

    <div className='ipynbInput'>
      <InputPrompt execution_count={props.data.execution_count}/>
      <div className='ipynbInput-inner'>
        <pre><code>{props.data.source.join('')}</code></pre>
      </div>
    </div>

    <div className='ipynbOutput'>
      <OutputPrompt execution_count={props.data.execution_count}/>
      <div className='ipynbOutput-inner'>
        {props.data.outputs.map((o,i) => {
          console.log(o,i)
          if (!o.data) return
          return (
            <pre key={`output-${i}`}><code>{(o.data['text/plain'] || []).join('')}</code></pre>
          )
        })}
      </div>
    </div>
  </div>
)

module.exports = CodeCell
