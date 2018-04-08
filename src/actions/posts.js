import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_POST = 'RECEIVED_POST';
export const VOTE_POST = 'VOTE_POST';
export const POST_FETCHED = 'POST_FETCHED';

/*
* Posts Reducer:
* RECEIVED_POST
*/
export const fetchPosts = () => dispatch => (
  BlogAPI
  .getAllPosts()
  .then(posts => {
    dispatch(receivedPosts(posts))
    dispatch({ type: POST_FETCHED, isPostsFetched: true })
  })
);

export const receivedPosts = posts => ({
  type: RECEIVED_POST,
  posts
});

/*
* Post Reducer:
* VOTE_POST
*/

export const fetchPost = (id) => dispatch => (
  BlogAPI
  .getPost(id)
  .then(post => dispatch(receivedPost(post)))
);

export const receivedPost = post => ({
  type: RECEIVED_POST,
  post
});

export const votePost = (id, option) => dispatch => (
  BlogAPI
  .votePost(id, option)
  .then(res => dispatch(updatePostScore(res)))
);

export const updatePostScore = ({ id, voteScore }) => ({
  type: VOTE_POST,
  id,
  voteScore
});
