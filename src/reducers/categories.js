import {
  RECEIVED_CATEGORIES,
} from '../actions/categories';

const initialCategoryState = {
  categories: []
};

export default (state = initialCategoryState, action) => {
  const { categories } = action;
  switch (action.type) {
    case RECEIVED_CATEGORIES :
    return {
      ...state,
      categories
    };

    default :
    return state;
  }
}
