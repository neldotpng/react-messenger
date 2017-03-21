
const initialState = {
  isFetching: false,
  messages: [],
  error: null,
}

const messagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MESSAGES':
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case 'FETCH_MESSAGES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
      }
    case 'FETCH_MESSAGES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default messagesReducer