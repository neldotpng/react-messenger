import {
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure
} from '../actions/messagesActions'
import axios from 'axios'


export const getMessages = () => (dispatch) => {
  dispatch(fetchMessages())
  axios({
    method: 'get',
    url: 'https://26ec5481.ngrok.io/',
  })
  .then(
    res => dispatch(fetchMessagesSuccess(res.data)),
    err => dispatch(fetchMessagesFailure(err))
  )
}