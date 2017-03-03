import React, { Component } from 'react'
import Message from './Message'
import '../css/Messages.css'

class Messages extends Component {
  render() {
    const messages = this.props.messages
    const renderedMessages = messages.map(message => {
      return (
        <Message
          message={message}
        />
      )
    })
    return (
      <div className="Messages-container">
        {renderedMessages}
      </div>
    )
  }
}

export default Messages