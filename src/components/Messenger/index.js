import React, { Component } from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'
import { connect } from 'react-redux'
import { getMessages } from '../../services/messagesService'

class Messenger extends Component {
  state = {
    messages: this.props.messages,
    inputValue: '',
    lastUser: '',
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      messages: nextProps.messages,
    })
  }

  handleChange(val) {
    this.setState({
      inputValue: val,
    })
  }

  handleSubmit() {
    if (!this.state.inputValue) return
    const newMessage = {
      user: {
        username: 'Melsom Change',
        avatar: 'https://avatars3.githubusercontent.com/u/11773089?v=3&s=460',
      },
      id: Math.random() * 10000000,
      text: this.state.inputValue,
      date: new Date(),
    }
    const messages = this.state.messages.concat(newMessage)
    this.setState({
      messages,
      inputValue: '',
    })
  }

  editMessage = (updatedMessage) => {
    const currentMessages = this.state.messages.slice()
    const index = currentMessages.map(m => m.id).indexOf(updatedMessage.id)
    currentMessages[index] = updatedMessage
    this.setState({
      messages: currentMessages,
    })
  }

  updateLastUser = (user) => {
    this.setState({
      lastUser: user,
    })
  }

  render() {
    return (
      <div>
        <h1>Chat Messenger</h1>
        <Messages
          lastUser={this.state.lastUser}
          updateLastUser={this.updateLastUser}
          messages={this.state.messages}
          editMessage={this.editMessage}
        />
        <ChatInput
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
          value={this.state.inputValue}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ messages: { messages }}) => {
  return {
    messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(getMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)