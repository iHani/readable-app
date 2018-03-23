import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, List, Menu } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';

class Voter extends Component {

  render () {
    return (
      <div className="box">
        <div><Link to={`/posts/${this.props.id}/upVote`}><List.Icon name='caret up' /></Link></div>
        <div>{this.props.voteScore}</div>
        <div><Link to={`/posts/${this.props.id}/downVote`}><List.Icon name='caret down' /></Link></div>
      </div>
    )
  }
}

export default Voter;
