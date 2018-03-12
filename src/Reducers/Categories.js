import {
  GET_ALL_CATEGORIES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from './index'

function categories (state = [], action) {

  switch (action.type) {
    case GET_ALL_CATEGORIES :
    return {
      ...state,
    }
    case ADD_CATEGORY :
    return {
      ...state,
    }
    case EDIT_CATEGORY :
    return {
      ...state,
    }
    case DELETE_CATEGORY :
    return {
      ...state,
    }
    default :
    return state
  }
}
export default categories
