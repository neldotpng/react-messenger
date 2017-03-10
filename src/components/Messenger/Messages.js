import React, { Component } from 'react'
import Message from './Message'
import '../css/Messages.css'

class Messages extends Component {
  render() {
    const messages = this.props.messages
    const renderedMessages = messages.map((message, index) => {
      return (
        <Message
          key={message.id}
          index={index}
          message={message}
          saveMessage={this.props.editMessage}
          lastUser={this.props.lastUser}
          updateLastUser={this.props.updateLastUser}
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