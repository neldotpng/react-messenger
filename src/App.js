import React, { Component } from 'react'
import Messenger from './components/Messenger'
import './App.css'
import { connect } from 'react-redux'
import addChat from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Messenger />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ chat: state })

const mapDispatchToProps = (dispatch) => ({ addChat: () => dispatch(addChat.addChat('hello')) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
