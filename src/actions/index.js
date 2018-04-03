import * as BlogAPI from '../Utils/BlogAPI';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

const initPost = [{ id: "8xf0y6ziyjabvozdd253nd", timestamp: 1467166872634, title: "Udacity is the best place to learn React", body: "Everyone says so after all.", voteScore: 850, commentCount: 7, author: 'thing three', category: 'REDUX' }]



export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  BlogAPI
  .getAllPosts()
  .then(posts => dispatch(receivePosts(posts)))
);


export function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function editPost ( id, post ) {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id,
  }
}
