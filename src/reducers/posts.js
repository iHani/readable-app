import {
  RECEIVED_POST,
  POST_FETCHED,
  VOTE_POST,
} from '../actions/posts'

const initialPostState = {
  posts: [],
  isPostsFetched: false,
  sortBy: 'SHOW_ALL'
}

export default (state = initialPostState, action) => {
  const { posts, isPostsFetched } = action
  switch (action.type) {
    case RECEIVED_POST :
    return {
      ...state,
      posts
    }

    case POST_FETCHED :
    return {
      ...state,
      isPostsFetched
    }

    case VOTE_POST :
    return {
      ...state,
      posts: state.posts.map(post => {
        if (post.id === action.id) {
          post.voteScore = action.voteScore
        }
        return post;
      })
    }

    default :
    return state;
  }
}
