import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_POST = 'RECEIVED_POST';
export const VOTE_POST = 'VOTE_POST';
export const POSTS_FETCHED = 'POST_FETCHED';
export const POST_DELETED = 'POST_DELETED';

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
  .then(({ id }) => {
    console.log('deletePost', id);
    dispatch(postDelated(id))
  })
);

export const postDelated = id => ({
  type: POST_DELETED,
  id
});
