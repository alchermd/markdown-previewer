import React from 'react'
import marked from 'marked'
import './MarkdownOutputDisplay.css'

const MarkdownOutputDisplay = ({outputText}) => 
  (<div className="MarkdownOutputDisplay" 
    dangerouslySetInnerHTML={{__html: marked(outputText)}}></div>)


export default MarkdownOutputDisplay