import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { Voter } from './index'

class CommentsList extends Component {

  render () {
    return (
      <List divided relaxed>

        {this.props.comments.map(comment => {
          const { id, voteScore  } = comment
          return (
            <List.Item key={id}>

              <List.Content floated='left'>
                <Voter
                  type='comment'
                  id={id}
                  voteScore={voteScore}
                />
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
      </List>
    )
  }
}

export default CommentsList;
