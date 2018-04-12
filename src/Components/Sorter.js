import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import * as sortBy from '../actions/sorting';

class Sorter extends Component {

  sortOptions = [
    { value: 'newest', text: 'newest' },
    { value: 'oldest', text: 'oldest' },
    { value: 'highestVote', text: 'highest voting' },
    { value: 'lowestVote', text: 'lowest voting' }
  ]

  sorterText = (option) => this.sortOptions.filter(({ value }) => value === option)[0].text;

  handleChangeSorter = (e, { value }) => {
    const { newest, oldest, highestVote, lowestVote  } = this.props;
    switch (value) {
      case 'newest': return newest()
      case 'oldest': return oldest()
      case 'highestVote': return highestVote()
      case 'lowestVote': return lowestVote()
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
        defaultValue={this.props.selectedSortBy}
        >
        </Dropdown>
      )
    }
  }

  const mapStateToProps = (state) => ({
    selectedSortBy: state.sorting.selectedSortBy
  });

  const mapDispatchToProps = dispatch => {
    const { newest, oldest, highestVote, lowestVote } = sortBy
    return {
      newest: () => dispatch(newest()),
      oldest: () => dispatch(oldest()),
      highestVote: () => dispatch(highestVote()),
      lowestVote: () => dispatch(lowestVote()),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
