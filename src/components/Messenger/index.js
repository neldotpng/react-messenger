import React, { Component } from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'

class Messenger extends Component {
  state = {
    messages: [],
    inputValue: '',
  }

  handleChange(val) {
    this.setState({
      inputValue: val,
    })
  }

  handleSubmit() {
    if (!this.state.inputValue) return
    const currentDate = new Date()
    const newMessage = {
      user: 'superchill94',
      text: this.state.inputValue,
      date: `${currentDate.toISOString().substr(0,10)}`,
      timestamp: `${currentDate.toTimeString().substr(0,8)}`,
    }
    const messages = this.state.messages.concat(newMessage)
    this.setState({
      messages,
      inputValue: '',
    })
  }

  render() {
    return (
      <div>
        <h1>Really Cool Chat App</h1>
        <Messages 
          messages={this.state.messages}
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

export default Messenger