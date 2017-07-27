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
  }

  render() {
    const {markdownText} = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MarkdownInputArea inputText={markdownText}/>
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