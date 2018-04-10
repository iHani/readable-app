import {
  RECEIVED_COMMENTS,
  SUBMIT_COMMENT,
  VOTE_COMMENT
} from '../actions/comments'

export default (state = [], action) => {
  // const { comments } = action

  switch (action.type) {

    case RECEIVED_COMMENTS :
    return {
      comments: action.comments
    }

    case SUBMIT_COMMENT :
    return {
      comments: [ ...state.comments, action.comment]
    }

    case VOTE_COMMENT :
    return {
      ...state,
      comments: state.comments.map(comment => {
        if (comment.id === action.id) {
          comment.voteScore = action.voteScore
        }
        return comment
      })
    }

    default :
    return state
  }
}
