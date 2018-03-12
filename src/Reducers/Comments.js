import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from './index'

function comments (state = [], action) {

  switch (action.type) {
    case GET_ALL_COMMENTS :
    return {
      ...state,
    }
    case ADD_COMMENT :
    return {
      ...state,
    }
    case EDIT_COMMENT :
    return {
      ...state,
    }
    case DELETE_COMMENT :
    return {
      ...state,
    }
    default :
    return state
  }
}
export default comments
