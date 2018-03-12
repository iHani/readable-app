import {
  GET_ALL_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './index'

const pos = [
  {
    author:"thingtwo",
    body:"Everyone says so after all.",
    category:"react",
    commentCount:2,
    deleted:false,
    id:"8xf0y6ziyjabvozdd253nd",
    timestamp:1467166872634,
    title:"Udacity is the best place to learn React",
    voteScore:600,
  }
]

function posts (state = [], action) {

  switch (action.type) {
    case GET_ALL_POSTS :
    return {
      ...state,
      posts: pos
    }
    case ADD_POST :
    return {
      ...state,
    }
    case EDIT_POST :
    return {
      ...state,
    }
    case DELETE_POST :
    return {
      ...state,
    }
    default :
    return state
  }
}

export default posts
