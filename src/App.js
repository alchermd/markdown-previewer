import React from 'react'
import MarkdownInputArea from './MarkdownInputArea'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MarkdownInputArea />
          </div>
          <div className="col-md-6">
            {/*result area*/}
          </div>
        </div>
      </div>
    )
  }
}

export default App