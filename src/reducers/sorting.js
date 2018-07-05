import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_HIGHEST_VOTES,
  SORT_BY_LOWEST_VOTES,
} from '../actions/sorting';

const initialPostState = {
  selectedSortBy: 'newest'
};

export default (state = initialPostState, action) => {

  switch (action.type) {

    case SORT_BY_NEWEST:
    return {
      ...state,
      selectedSortBy: 'newest'
    };

    case SORT_BY_OLDEST:
    return {
      ...state,
      selectedSortBy: 'oldest'
    };

    case SORT_BY_HIGHEST_VOTES:
    return {
      ...state,
      selectedSortBy: 'highestVotes'
    };

    case SORT_BY_LOWEST_VOTES:
    return {
      ...state,
      selectedSortBy: 'lowestVotes'
    };

    default:
    return state;
  }
}
