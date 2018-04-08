import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES';

export const fetchCategories = (id) => dispatch => (
  BlogAPI
  .getAllCategories()
  .then(categories => dispatch(receivedCategories(categories)))
);

export const receivedCategories = categories => ({
  type: RECEIVED_CATEGORIES,
  categories
});
