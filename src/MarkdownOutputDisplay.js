import React from 'react'
import marked from 'marked'

const MarkdownOutputDisplay = ({outputText}) => 
  (<div dangerouslySetInnerHTML={{__html: marked(outputText)}}></div>)


export default MarkdownOutputDisplay