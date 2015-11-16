'use strict'

import React from 'react'
import InputPrompt from '../prompts/input'
import OutputPrompt from '../prompts/output'
//import Highlight from 'react-highlight'

//<Highlight key={`output-${i}`} className="python">{(o.data['text/plain'] || []).join('')}</Highlight>

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
          if (!o.data) return
          return (
            <pre key={`output-${i}`} className="python"><code>{(o.data['text/plain'] || []).join('')}</code></pre>
          )
        })}
      </div>
    </div>
  </div>
)

module.exports = CodeCell
