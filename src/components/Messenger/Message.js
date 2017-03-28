import React, { Component } from 'react'
import User from './User'
import moment from 'moment'
import { connect } from 'react-redux'
import { updateMessage } from '../../services/messagesService'
import '../css/Message.css'

class Message extends Component {
  state = {
    showEditButton: false,
    isEditing: false,
    newMessage: '',
  }

  toggleEditButton = () => {
    const currentTime = moment(new Date().getTime()).unix()
    const messageTime = moment(this.props.message.date).unix()
    console.log(messageTime)
    const timeDiff = currentTime - messageTime

    if (timeDiff > 5000) {
      return this.resetState()
    }

    this.setState({
      showEditButton: !this.state.showEditButton,
    })
  }

  editMessage = () => {
    this.setState({
      isEditing: true,
      newMessage: this.props.message.text,
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
    this.props.updateMessage(newMessage)
  }

  updateNewMessage = (e) => {
    e.preventDefault()
    var val = e.target.value
    this.setState({
      newMessage: val,
    })
  }

  componentDidMount() {
    this.props.updateLastUser(this.props.message.user.username)
    setTimeout(() => {
      this.resetState()
    }, 5000)
  }

  resetState = () => {
    this.setState({
      showEditButton: false,
      isEditing: false,
    })
  }

  checkLastUser = (user, lastUser) => {
    if (user === lastUser) {
      return true
    }
    else {
      return false
    }
  }

  render() {
    const { message, message:{ user } } = this.props
    return (
      <div
        onMouseEnter={this.toggleEditButton}
        onMouseLeave={this.toggleEditButton}
        className="Message"
      >

        <User
          lastUser={this.checkLastUser(user.username, this.props.lastUser)}
          show={this.props.index < 1}
          username={user.username}
          avatar={user.avatar}
          date={message.date}
        />

        { !this.state.isEditing && 
          <div className="Message-text">{message.text}</div>
        }

        { this.state.isEditing && 
          <div>
            <input
              type="text"
              value={this.state.newMessage}
              onChange={this.updateNewMessage}
              className="Message-input"
            />
            <button
              onClick={this.saveMessage}
              className="Message-save"
            >
              Save
            </button>
          </div>
        }

        { this.state.showEditButton && 
          <button
            onClick={this.editMessage}
            className="Message-edit"
          >
            Edit
          </button>
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (id, text) => dispatch(updateMessage(id, text))
  }
}

export default connect(null, mapDispatchToProps)(Message)