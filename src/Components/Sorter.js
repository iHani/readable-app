import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import * as sortBy from '../actions/sorting';

class Sorter extends Component {

  sortOptions = [
    { value: 'newest', text: 'newest' },
    { value: 'oldest', text: 'oldest' },
    { value: 'highestVotes', text: 'highest votes' },
    { value: 'lowestVotes', text: 'lowest votes' }
  ];

  sorterText = (option) => this.sortOptions.filter(({ value }) => value === option)[0].text;

  handleChangeSorter = (e, { value }) => {
    const { newest, oldest, highestVotes, lowestVotes  } = this.props;
    switch (value) {
      case 'newest': return newest()
      case 'oldest': return oldest()
      case 'highestVotes': return highestVotes()
      case 'lowestVotes': return lowestVotes()
      default: newest()
    }
  };

  render () {
    return (
      <Dropdown
        simple
        text={`Sort by ${this.sorterText(this.props.selectedSortBy)}`}
        options={this.sortOptions}
        onChange={this.handleChangeSorter}
        defaultValue={this.props.selectedSortBy} >
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedSortBy: state.sorting.selectedSortBy
});

const mapDispatchToProps = (dispatch) => {
  const { newest, oldest, highestVotes, lowestVotes } = sortBy;
  return {
    newest: () => dispatch(newest()),
    oldest: () => dispatch(oldest()),
    highestVotes: () => dispatch(highestVotes()),
    lowestVotes: () => dispatch(lowestVotes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
