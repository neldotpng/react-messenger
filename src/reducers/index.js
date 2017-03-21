import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'

const chat = (state = ['hello'], action) => {
  switch(action.type) {
    case 'ADD_CHAT':
      return state.concat(action.text)
    default:
      return state
  }
}

const chatApp = combineReducers({
  chat,
  messages: messagesReducer,
})

export default chatApp