import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const somfin = 'somfin';

class Sorter extends Component {


  sortOptions = [
    { value: 'Newest', text: 'Newest' },
    { value: 'Oldest', text: 'Oldest' },
    { value: 'Highest rating', text: 'Highest rating' },
    { value: 'Lowest rating', text: 'Lowest rating' }
  ]

  render () {
    return (
      <Dropdown
        simple
        text={`Sort by ${somfin}`}
        options={this.sortOptions}
        >
        </Dropdown>
    )
  }
}

export default Sorter;
