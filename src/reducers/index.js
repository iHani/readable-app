import { combineReducers } from 'redux'

import {
  GET_ALL_POSTS,
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions'

// const initPost = { id: "8xf0y6ziyjabvozdd253nd", timestamp: 1467166872634, title: "Udacity is the best place to learn React", body: "Everyone says so after all.", author: "thingtwo" }

function postsReducer (state = {}, action) {
  const { id, posts } = action

  switch (action.type) {
    case GET_ALL_POSTS :
    return {
      ...state,
    }

    case RECEIVE_POSTS :
    return {
      ...state,
      posts
    }

    case ADD_POST :
    return {
      state,
    }

    case EDIT_POST :
    return {
      state,
      ///
    }

    case DELETE_POST :
    return {
      // change flag to 'deleted post'
      // state.posts.filter(post => post.id !== id),
      state
    }

    default :
    return state
  }
}

export default combineReducers({
  postsReducer,
})
