import React from 'react'
import './MarkdownInputArea.css'

class MarkdownInputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.inputText
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * 
   * @param {object} event - an event object. 
   */
  handleChange(event) {
    this.props.handleChange(event.target.value)
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <textarea className='MarkdownInputArea' value={this.state.text} onChange={this.handleChange}>
        {this.props.inputText}
      </textarea>
    )
  }
}

export default MarkdownInputArea