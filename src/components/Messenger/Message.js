import React, { Component } from 'react'
import '../css/Message.css'

class Message extends Component {
  state = {
    showEditButton: false,
    isEditing: false,
    newMessage: '',
  }

  toggleEditButton = () => {
    const currentTime = new Date().toTimeString().substr(0,8).split(':').reduce((a, b) => a + b)
    const messageTime = this.props.message.timestamp.split(':').reduce((a, b) => a + b)
    if ((currentTime - messageTime) > 5) {
      return this.resetState()
    }
    this.setState({
      showEditButton: !this.state.showEditButton,
    })
  }

  editMessage = () => {
    this.setState({
      isEditing: true,
    })
  }

  saveMessage = () => {
    this.setState({
      isEditing: false,
    })
    const newMessage = {
      ...this.props.message,
      text: this.state.newMessage,
    }
    this.props.saveMessage(newMessage)
    this.resetState()
  }

  updateNewMessage = (e) => {
    this.setState({
      newMessage: e.target.value,
    })
  }

  resetState = () => {
    setTimeout(() => {
      this.setState({
        showEditButton: false,
        isEditing: false,
      })
    }, 5000)
  }

  render() {
    const { message } = this.props
    return (
      <div
        onMouseEnter={this.toggleEditButton}
        onMouseLeave={this.toggleEditButton}
      >
        <div className="Message-user">
          {message.user} <span className="Message-date">{message.timestamp}</span>
        </div>

        {!this.state.isEditing && 
          <div className="Message-text">{message.text}</div>
        }

        {this.state.isEditing && 
          <div>
            <input type="text" placeholder={message.text} onChange={this.updateNewMessage} />
            <button
              onClick={this.saveMessage}
            >
              Save
            </button>
          </div>
        }
        {this.state.showEditButton && 
          <button onClick={this.editMessage}>Edit</button>
        }
      </div>
    )
  }
}

export default Message