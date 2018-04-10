import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

/*
* Comments Reducer:
* GET_ALL_COMMENTS
*/
export const fetchComments = (parentid) => (dispatch) => (
  BlogAPI
  .getComments(parentid)
  .then(comments => {
    dispatch(receivedComments(comments))
  })
);

export const receivedComments = (comments) => ({
  type: RECEIVED_COMMENTS,
  comments
});

export const postComment = (comment) => dispatch => (
  BlogAPI
  .postComment(comment)
  .then(comment => {
    dispatch(submitComment(comment))
  })
);

export const submitComment = (comment) => ({
  type: SUBMIT_COMMENT,
  comment
});

export const voteComment = (id, option) => dispatch => (
  BlogAPI
  .voteComment(id, option)
  .then(res => dispatch(updateCommentScore(res)))
);

export const updateCommentScore = ({ id, voteScore }) => ({
  type: VOTE_COMMENT,
  id,
  voteScore
});
