import * as BlogAPI from '../Utils/BlogAPI';
export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENT_UPDATED = 'COMMENT_UPDATED';

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

export const voteComment = (id, option) => (dispatch) => (
  BlogAPI
  .voteComment(id, option)
  .then(res => dispatch(updateCommentScore(res)))
);

export const updateCommentScore = ({ id, voteScore }) => ({
  type: VOTE_COMMENT,
  id,
  voteScore
});

export const deleteComment = (id) => (dispatch) => (
  BlogAPI
  .deleteComment(id)
  .then(({ id }) => {
    dispatch(deleteAComment(id))
  })
);

export const deleteAComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const editComment = (id, comment) => (dispatch) => (
  BlogAPI
  .editComment(id, comment)
  .then(comment => {
    dispatch(commentUpdated(comment))
  })
);

export const commentUpdated = (comment) => ({
  type: COMMENT_UPDATED,
  comment
});
