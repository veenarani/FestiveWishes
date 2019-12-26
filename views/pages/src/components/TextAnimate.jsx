import React, { Component } from 'react'
import '../css/textAnimation.scss'

const query = new URLSearchParams(window.location.search)
const token = query.get('name')
export default class TextAnimate extends Component {
  componentDidMount() {

  }

  render() {
    return (token
      ? <div class="cardcontainer"><span className="glow">{token}</span></div>
      : <div class="cardcontainer"><span className="glow">Hello dear wish you</span></div>
    )
  }
}
