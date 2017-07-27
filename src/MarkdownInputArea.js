import React from 'react'
import './MarkdownInputArea.css'

class MarkdownInputArea extends React.Component {
  render() {
    return (
      <textarea className='MarkdownInputArea'>
        {this.props.inputText}
      </textarea>
    )
  }
}

export default MarkdownInputArea