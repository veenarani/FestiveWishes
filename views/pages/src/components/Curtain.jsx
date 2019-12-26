import React, { Component } from 'react'
import MainContainer from './MainContainer'
import SocialApps from './SocialApps'
import snowMan from '../images/numbers1.gif';

import '../../src/css/Curtain.scss';
import '../../src/css/fireworkAnimation.scss';



var curtainClose = 'curtainOpen';
var shareButton = 'shareButton';
var particalAnim = 'particalAnim'

export default class Curtain extends Component {
  state = { checked: true }
  getInitialState() {
    return { showResults: false }
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked })
    curtainClose = 'curtainClose';
    particalAnim = 'hideparticalAnim'

  }

  constructor(props) {
    super(props)

  }

  shareto = () => {
    this.setState({ showResults: true })
    shareButton = 'disableButton';
  }

  render() {
    return (
      <div className={particalAnim}>
        <div className="before"></div>
        <div className="after"></div>
        <div className="curtain">
          <div className="curtain__wrapper">
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} disabled={!this.state.checked} className={curtainClose} />
            <div className="curtain__panel curtain__panel--left">
              <img id="bunnyleft" className="bunny" width='220' height='400' src={snowMan} alt="Merry Christmas" />

              <h1>
                Click&nbsp;</h1>

            </div>
            <div className="curtain__content">

              {!this.state.showResults ? <button className={shareButton} onClick={this.shareto}><span className='forward'>Share</span>
              </button> : null}

              {this.state.showResults ? <SocialApps /> : <MainContainer />}
            </div>
            <div className="curtain__panel curtain__panel--right">
              <h1>
                here...
            </h1>
              <img id="bunnyRight" className="bunny" width='220' height='400' src={snowMan} alt="Merry Christmas" />

            </div>

          </div>
        </div>
      </div>

    )
  }
}
