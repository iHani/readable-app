import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { Voter } from './index';
import * as BlogAPI from '../Utils/BlogAPI';


class CommentsList extends Component {

  HandleDeleteComment = (id) => {
    BlogAPI.deleteComment(id).then(res => console.log(`post ${res.id} deleted`))
    // console.log('deleted?', id);
  }

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
                <Link to='/'><List.Icon name='trash' style={{color: 'red'}} onClick={() => this.HandleDeleteComment(id)}/></Link>
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
