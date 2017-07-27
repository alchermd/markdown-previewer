import React from 'react'
import MarkdownInputArea from './MarkdownInputArea'
import MarkdownOutputDisplay from './MarkdownOutputDisplay.js'
import defaultText from './defaultText'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdownText: defaultText
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * 
   * @param {string} newText - an updated text from the textarea.
   */
  handleChange(newText) {
    this.setState({markdownText: newText})
  }

  render() {
    const {markdownText} = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MarkdownInputArea inputText={markdownText} handleChange={this.handleChange}/>
          </div>
          <div className="col-md-6">
            <MarkdownOutputDisplay outputText={markdownText} />
          </div>
        </div>
      </div>
    )
  }
}

export default App