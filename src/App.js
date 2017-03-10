import React, { Component } from 'react'
import Messenger from './components/Messenger'
import './App.css'
import { connect } from 'react-redux'
import addChat from './actions'

class App extends Component {
  render() {
    console.log(this.props)
    console.log(addChat)
    return (
      <div className="App">
        <button
          onClick={this.props.addChat}
        >Add Chat</button>
        { JSON.stringify(this.props.chat) }
        {/*<Messenger />*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ chat: state })

const mapDispatchToProps = (dispatch) => ({ addChat: () => dispatch(addChat.addChat('hello')) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
