import * as BlogAPI from '../Utils/BlogAPI';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';
// export const ADD_POST = 'ADD_POST';
// export const VOTE_COMMENT = 'VOTE_COMMENT';
// export const EDIT_POST = 'EDIT_POST';
// export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => dispatch => (
  BlogAPI
  .getAllPosts()
  .then(posts => dispatch(receivePosts(posts)))
);
export const receivePosts = posts => ({
  type: GET_ALL_POSTS,
  posts
});

export const votePost = (id, option) => dispatch => (
  BlogAPI.votePost(id, option)
  .then(({ id, voteScore }) => dispatch(updateVotePost(id, voteScore)))
);

export function updateVotePost (id, voteScore) {
  return {
    type: VOTE_POST,
    id,
    voteScore
  }
}

// export function updateVoteComment (id, voteScore) {
//   return {
//     type: VOTE_COMMENT,
//     id,
//     voteScore
//   }
// }

// export function addPost (post) {
//   return {
//     type: ADD_POST,
//     post
//   }
// }
//
//
// export function editPost ( id, post ) {
//   return {
//     type: EDIT_POST,
//     id,
//     post
//   }
// }
//
// export function deletePost (id) {
//   return {
//     type: DELETE_POST,
//     id,
//   }
// }
