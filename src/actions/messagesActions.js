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

export const addMessage = () => {
  return {
    type: 'ADD_MESSAGE'
  }
}

export const addMessageSuccess = message => {
  return {
    type: 'ADD_MESSAGE_SUCCESS',
    payload: message,
  }
}

export const addMessageFailure = error => {
  return {
    type: 'ADD_MESSAGE_FAILURE',
    payload: error,
  }
}

export const editMessage = () => {
  return {
    type: 'EDIT_MESSAGE'
  }
}

export const editMessageSuccess = message => {
  return {
    type: 'EDIT_MESSAGE_SUCCESS',
    payload: message,
  }
}

export const editMessageFailure = error => {
  return {
    type: 'EDIT_MESSAGE_FAILURE',
    payload: error,
  }
}