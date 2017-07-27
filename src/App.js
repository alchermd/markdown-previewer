import React from 'react'
import MarkdownInputArea from './MarkdownInputArea'
import MarkdownOutputDisplay from './MarkdownOutputDisplay.js'
import defaultText from './defaultText'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MarkdownInputArea inputText={defaultText}/>
          </div>
          <div className="col-md-6">
            <MarkdownOutputDisplay outputText={defaultText} />
          </div>
        </div>
      </div>
    )
  }
}

export default App