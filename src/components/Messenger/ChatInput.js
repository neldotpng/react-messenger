import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pushMessage } from '../../services/messagesService'
import '../css/ChatInput.css'

class ChatInput extends Component {
  state = {
    text: '',
  }

  handleChange = e => {
    e.preventDefault()
    var val = e.target.value
    this.setState({
      text: val,
    })
  }

  handleSubmit() {
    const newMessage = {
      user: {
        username: 'Melsom Change',
        avatar: 'https://avatars3.githubusercontent.com/u/11773089?v=3&s=460',
      },
      id: Math.random() * 10000000,
      text: this.state.text,
      date: new Date(),
    }
    this.props.pushMessage(newMessage)
    this.setState({
      text: '',
    })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  render() {
    return (
      <div className="Chat-box">
        <input
          className="Chat-input"
          placeholder="Type here..."
          type="textarea"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)} />
        <button
          className="Chat-submit"
          value="submit"
          onClick={this.handleSubmit.bind(this)}>
          Send
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushMessage: (text) => dispatch(pushMessage(text))
  }
}

export default connect(null, mapDispatchToProps)(ChatInput)