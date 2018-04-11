import * as BlogAPI from '../Utils/BlogAPI';
export const POST_A_POST = 'POST_A_POST';
export const RECEIVED_POST = 'RECEIVED_POST';
export const VOTE_POST = 'VOTE_POST';
export const POSTS_FETCHED = 'POST_FETCHED';
export const POST_DELETED = 'POST_DELETED';
export const SORT_BY = 'SORT_BY';

/*
* Posts Reducer:
* RECEIVED_POST
*/
export const fetchPosts = () => dispatch => (
  BlogAPI
  .getAllPosts()
  .then(posts => {
    dispatch(receivedPosts(posts))
    dispatch(postsFetched())
  })
);

export const receivedPosts = posts => ({
  type: RECEIVED_POST,
  posts
});

export const postsFetched = () => ({
  type: POSTS_FETCHED,
  isPostsFetched: true
});

export const postPost = (post) => dispatch => (
  BlogAPI
  .postPost(post)
  .then(post => {
    dispatch(postAPost(post))
  })
);

export const postAPost = post => ({
  type: POST_A_POST,
  post
});

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

export const deletePost = (id) => dispatch => (
  BlogAPI
  .deletePost(id)
  .then(({ id }) => dispatch(postDeleted(id)))
);

export const postDeleted = id => ({
  type: POST_DELETED,
  id
});

export const sortBy = option => ({
  type: SORT_BY,
  option
})
