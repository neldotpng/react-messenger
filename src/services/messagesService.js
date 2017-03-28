import {
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
  addMessageSuccess,
  addMessageFailure,
  editMessage,
  editMessageSuccess,
  editMessageFailure
} from '../actions/messagesActions'
import axios from 'axios'


export const getMessages = () => (dispatch) => {
  dispatch(fetchMessages())
  axios({
    method: 'get',
    url: 'http://localhost:4000',
  })
  .then(
    res => dispatch(fetchMessagesSuccess(res.data)),
    err => dispatch(fetchMessagesFailure(err))
  )
}

export const pushMessage = (newMessage) => (dispatch) => {
  dispatch(addMessage())
  axios({
    method: 'post',
    url: 'http://localhost:4000',
    data: newMessage
  })
  .then(
    res => dispatch(addMessageSuccess(res.data)),
    err => dispatch(addMessageFailure(err))
  )
}

export const updateMessage = (message) => (dispatch) => {
  dispatch(editMessage())
  axios({
    method: 'put',
    url: 'http://localhost:4000',
    data: message,
  })
  .then(
    res => dispatch(editMessageSuccess(res.data)),
    err => dispatch(editMessageFailure(err))
  )
}