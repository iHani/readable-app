import {
  RECEIVED_CATEGORIES,
} from '../actions/categories';

export default (state = {}, action) => {

  switch (action.type) {
    case RECEIVED_CATEGORIES :
    return {
      ...state,
      ...action.categories
    }

    default :
    return state
  }
}
