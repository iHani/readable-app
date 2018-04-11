export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_OLDEST = 'SORT_BY_OLDEST';
export const SORT_BY_HIGHEST_VOTE = 'SORT_BY_HIGHEST_VOTE';
export const SORT_BY_LOWEST_VOTE = 'SORT_BY_LOWEST_VOTE';

export const newest = () => ({
  type: SORT_BY_NEWEST
});

export const oldest = () => ({
  type: SORT_BY_OLDEST
});

export const highestVote = () => ({
  type: SORT_BY_HIGHEST_VOTE
});

export const lowestVote = () => ({
  type: SORT_BY_LOWEST_VOTE
});

export const sortBy = (posts, option) => {
  return posts.sort((a, b) => {
    switch (option) {
      case 'newest': return a.timestamp < b.timestamp ? 1 : -1;
      case 'oldest': return a.timestamp < b.timestamp ? -1 : 1;
      case 'highestVote': return a.voteScore < b.voteScore ? 1 : -1;
      case 'lowestVote': return a.voteScore < b.voteScore ? -1 : 1;
      default:
    }
    return {}
  })
}
