import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { votePost } from '../Actions/posts';
import { voteComment } from '../Actions/comments';

class Voter extends Component {

  caretClicked (option) {
    const { type, id } = this.props;
    if (type === 'post') {
      this.props.dispatchVotePost(id, option);
    } else if (type === 'comment') {
      this.props.dispatchVoteComment(id, option);
    } else {
      console.log('Error: Wrong value of "type"');
    }
  }

  render () {
    return (
      <span className="box">
        <div className="center-item size-20px pointer" onClick={() => this.caretClicked('upVote')}><List.Icon name='caret up' /></div>
        <div className="center-item">{this.props.voteScore}</div>
        <div className="center-item size-20px pointer" onClick={() => this.caretClicked('downVote')}><List.Icon name='caret down' /></div>
      </span>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchVotePost: (id, option) => dispatch(votePost(id, option)),
  dispatchVoteComment: (id, option) => dispatch(voteComment(id, option)),
});

export default connect(undefined, mapDispatchToProps)(Voter);
