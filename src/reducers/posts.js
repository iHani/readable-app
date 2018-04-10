import {
  RECEIVED_POST,
  POSTS_FETCHED,
  VOTE_POST,
  POST_DELETED,
} from '../actions/posts'

const initialPostState = {
  posts: [],
  isPostsFetched: false,
  sortBy: 'SHOW_ALL'
}

export default (state = initialPostState, action) => {
  const { id, posts, isPostsFetched } = action
  switch (action.type) {
    case RECEIVED_POST :
    return {
      ...state,
      posts
    }

    case POSTS_FETCHED :
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

    case POST_DELETED :
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== id)
    }

    default :
    return state;
  }
}
