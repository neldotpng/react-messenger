import React, { Component } from 'react'
import '../css/Message.css'

class Message extends Component {
  render() {
    const message = this.props.message
    return (
      <div>
        <div className="Message-user">
          {message.user} <span className="Message-date">{message.timestamp}</span>
        </div>
        <div className="Message-text">{message.text}</div>
      </div>
    )
  }
}

export default Message