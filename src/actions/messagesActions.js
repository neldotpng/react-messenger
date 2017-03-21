export const fetchMessages = () => {
  return {
    type: 'FETCH_MESSAGES',
  }
}

export const fetchMessagesSuccess = messages => {
  return {
    type: 'FETCH_MESSAGES_SUCCESS',
    payload: messages,
  }
}

export const fetchMessagesFailure = error => {
  return {
    type: 'FETCH_MESSAGES_FAILURE',
    payload: error,
  }
}