import {
  RECEIVED_COMMENTS,
  VOTE_COMMENT
} from '../actions/comments'

export default (state = [], action) => {
  // const { id, posts, post, option, voteScore } = action

  switch (action.type) {

    case RECEIVED_COMMENTS :
    return {
      comments: action.comments
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
