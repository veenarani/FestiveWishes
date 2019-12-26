/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import snowIceMan from '../images/happynewyear.gif';
import '../../src/css/SocialSharing.scss'

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share'

var shareUrl = window.location.origin + '/wish?name='
const title = 'Santa Surprise'
class SocialApps extends Component {
  state = { value: '', showSharingapps: false }

  onSubmit = () => {
    shareUrl += this.state.value
    this.setState({ showSharingapps: true, value: '' })
    console.log(shareUrl)
  }

  getInitialState = () => {
    return { value: 'Hello' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <div className="textContainer">
          <label className="shareLabel">Name: </label>
          <input type="text" className="inputText"
            value={this.state.value}
            onChange={this.handleChange} placeholder="Type Name" id="name" />

        </div>
        <button className="shareApps" onClick={this.onSubmit} >Share</button>

        {this.state.showSharingapps
          ? <div className="Demo__container">
            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button">
                <FacebookIcon
                  size={40}
                  round />
              </FacebookShareButton>

            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button">
                <TwitterIcon
                  size={40}
                  round />
              </TwitterShareButton>

              <div className="Demo__some-network__share-count">
                &nbsp;
                </div>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button">
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>

              <div className="Demo__some-network__share-count">
                &nbsp;
                </div>
            </div>


          </div> : null}
        <img className="snowIceMan" width='220' height='400' src={snowIceMan} alt="Merry Christmas" />

      </React.Fragment>
    )
  }
}

export default SocialApps
