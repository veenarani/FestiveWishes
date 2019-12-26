import React, { Component } from 'react'
import CurtainComponent from '../components/Curtain'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <CurtainComponent />
      </div>
    )
  }
}

export default App
