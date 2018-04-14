import {
  POST_A_POST,
  RECEIVED_POST,
  POSTS_FETCHED,
  VOTE_POST,
  POST_DELETED,
  POST_UPDATED,
  DECREASE_COMMENT_COUNT
} from '../actions/posts';

const initialPostState = {
  posts: [],
  postsAreFetched: false,
};

export default (state = initialPostState, action) => {
  const { id, post, posts, postsAreFetched } = action;
  switch (action.type) {

    case POST_A_POST :
    return {
      ...state,
      posts: [ ...state.posts, post ]
    };

    case RECEIVED_POST :
    return {
      ...state,
      posts
    };

    case POSTS_FETCHED :
    return {
      ...state,
      postsAreFetched
    };

    case VOTE_POST :
    return {
      ...state,
      posts: state.posts.map(post => post.id === action.id ?
        Object.assign(post, { voteScore: action.voteScore })
        : post)
      };

      case POST_DELETED :
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== id)
      };

      case POST_UPDATED :
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.post.id ? action.post : p)
      };

      case DECREASE_COMMENT_COUNT :
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.id ?
          Object.assign(post, { commentCount: post.commentCount - 1 })
          : post)      };

      default :
      return state;
    }
  }
