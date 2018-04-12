import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_HIGHEST_VOTE,
  SORT_BY_LOWEST_VOTE,
} from '../actions/sorting';

const initialPostState = {
  selectedSortBy: 'newest'
}

export default (state = initialPostState, action) => {
  // const { id, post, posts, isPostsFetched } = action
  switch (action.type) {

    case SORT_BY_NEWEST:
    return {
      ...state,
      selectedSortBy: 'newest'
    }

    case SORT_BY_OLDEST:
    return {
      ...state,
      selectedSortBy: 'oldest'
    }

    case SORT_BY_HIGHEST_VOTE:
    return {
      ...state,
      selectedSortBy: 'highestVote'
    }

    case SORT_BY_LOWEST_VOTE:
    return {
      ...state,
      selectedSortBy: 'lowestVote'
    }

    default:
    return state;
  }
}
