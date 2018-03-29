import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';

class Voter extends Component {

  state = {
    id: this.props.id,
    voteScore: this.props.voteScore
  }

  caretClicked (option) {
    // console.log(option, this.props.type, this.props.id);
    if (this.props.type === 'post') {
      BlogAPI.votePost(this.props.id, option)
      .then(({ voteScore }) => this.setState({ voteScore }))
    } else if (this.props.type === 'comment') {
      BlogAPI.voteComment(this.props.id, option)
      .then(({ voteScore }) => this.setState({ voteScore }))
    } else {
      console.log('Error value of "type"');
    }
  }

  componentWillReceiveProps () {
    const { id, voteScore } = this.props
    this.setState({ id, voteScore })
  }

  render () {
    return (
      <span className="box">
        <div className="center-item caret" onClick={() => this.caretClicked('upVote')}><List.Icon name='caret up' /></div>
        <div className="center-item">{this.state.voteScore}</div>
        <div className="center-item caret" onClick={() => this.caretClicked('downVote')}><List.Icon name='caret down' /></div>
      </span>
    )
  }
}

export default Voter;
