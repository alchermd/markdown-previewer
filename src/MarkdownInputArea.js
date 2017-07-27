import React from 'react'
import './MarkdownInputArea.css'
import defaultText from './defaultText'

class MarkdownInputArea extends React.Component {
  render() {
    return (
      <textarea className='MarkdownInputArea'>
        {defaultText}
      </textarea>
    )
  }
}

export default MarkdownInputArea