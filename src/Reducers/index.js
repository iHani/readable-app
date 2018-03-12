import posts from './Posts';
import comments from './Comments';
import categories from './Categories';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export default {
  posts,
  comments,
  categories,
}
