import { RECEIVE_POSTS } from '../actions/blog'

export default function posts(state = {}, {type, ...action}){
  switch(type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    case 'GET_POSTS':
      return action.posts
    default:
      return state
  }
}