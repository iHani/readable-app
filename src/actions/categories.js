import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES';

export const fetchCategories = () => dispatch => (
  BlogAPI
  .getAllCategories()
  .then(res => {
    dispatch(receivedCategories(res.categories))
  })
);

export const receivedCategories = categories => ({
  type: RECEIVED_CATEGORIES,
  categories
});
