import {
  RECEIVED_COMMENTS,
  SUBMIT_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  COMMENT_UPDATED
} from '../Actions/comments';

export default (state = [], action) => {

  switch (action.type) {

    case RECEIVED_COMMENTS :
    return {
      comments: action.comments
    };

    case SUBMIT_COMMENT :
    return {
      comments: [ ...state.comments, action.comment ]
    };

    case VOTE_COMMENT :
    return {
      ...state,
      comments: state.comments.map(comment => comment.id === action.id ?
        Object.assign(comment, { voteScore: action.voteScore })
        : comment)
    };

    case DELETE_COMMENT :
    return {
      ...state,
      comments: [ ...state.comments.filter(c => c.id !== action.id) ]
    };

    case COMMENT_UPDATED :
    return {
      ...state,
      comments: state.comments.map(c => c.id === action.comment.id ? action.comment : c)
    };

    default :
    return state;
  }
}
