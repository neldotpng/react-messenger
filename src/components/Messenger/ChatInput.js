import React, { Component } from 'react'
import '../css/ChatInput.css'

class ChatInput extends Component {
  state = {}

  handleChange = e => {
    e.preventDefault()
    var val = e.target.value
    this.props.onChange(val)
  }

  handleSubmit() {
    this.props.onSubmit()
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
          value={this.props.value}
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

export default ChatInput