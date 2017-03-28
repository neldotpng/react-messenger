
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
    case 'ADD_MESSAGE':
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case 'ADD_MESSAGE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
      }
    case 'ADD_MESSAGE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: null,
      }
    case 'EDIT_MESSAGE':
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case 'EDIT_MESSAGE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
      }
    case 'EDIT_MESSAGE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: null,
      }
    default:
      return state
  }
}

export default messagesReducer