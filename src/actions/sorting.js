export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_OLDEST = 'SORT_BY_OLDEST';
export const SORT_BY_HIGHEST_VOTES = 'SORT_BY_HIGHEST_VOTES';
export const SORT_BY_LOWEST_VOTES = 'SORT_BY_LOWEST_VOTES';

export const newest = () => ({
  type: SORT_BY_NEWEST
});

export const oldest = () => ({
  type: SORT_BY_OLDEST
});

export const highestVotes = () => ({
  type: SORT_BY_HIGHEST_VOTES
});

export const lowestVotes = () => ({
  type: SORT_BY_LOWEST_VOTES
});

export const sortBy = (posts, option) => {
  return posts.sort((a, b) => {
    switch (option) {
      case 'newest': return a.timestamp < b.timestamp ? 1 : -1;
      case 'oldest': return a.timestamp < b.timestamp ? -1 : 1;
      case 'highestVotes': return a.voteScore < b.voteScore ? 1 : -1;
      case 'lowestVotes': return a.voteScore < b.voteScore ? -1 : 1;
      default:
    }
    return {};
  })
}
