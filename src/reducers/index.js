import { combineReducers } from 'redux'

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
})

export default chatApp