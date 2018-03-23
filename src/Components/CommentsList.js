import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Dropdown, List, Menu } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';
import { Voter } from './index'

class CommentsList extends Component {

  render () {
    return (
      <List divided relaxed>

        {this.props.comments.map(comment => {
          const { id, voteScore, category,  } = comment
          return (
            <List.Item key={id}>

              <List.Content floated='left'>
                <Voter id={id} voteScore={voteScore} />
              </List.Content>

              <List.Content floated='right'>
                <Link to='/'><List.Icon name='pencil' style={{color: 'grey'}} /></Link>
                <Link to='/'><List.Icon name='trash' style={{color: 'red'}} /></Link>
              </List.Content>

              <List.Content floated='left'>
                <List.Header>{comment.author}:</List.Header>
                {comment.body}
              </List.Content>

            </List.Item>
          )
        })}

        <Divider horizontal>Add new comment</Divider>
      </List>
    )
  }
}

export default CommentsList;
