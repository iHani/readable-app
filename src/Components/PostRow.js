import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, List } from 'semantic-ui-react';
import { Voter } from './index'

class PostRow extends Component {

  render () {
    const { id, voteScore, commentCount, category, title, body, author } = this.props.post

    return (
      <List.Item>

        <List.Content floated='left'>
          <Voter
            type='post'
            id={id}
            voteScore={voteScore}
          />
        </List.Content>

        <List.Content floated='right'>
          <Label as='a' color='green'>
            {category}
          </Label>
          <Label>
            <List.Icon name='comments' /> {commentCount}
          </Label>
          <Link to='/'><List.Icon name='pencil' style={{color: 'grey'}} /></Link>
          <Link to='/'><List.Icon name='trash' style={{color: 'red'}} /></Link>
        </List.Content>

        <List.Content floated='left'>
          <Link to={`/posts/${id}`} body={body}>
          <List.Header>{title}</List.Header>
        </Link>
        <List.Description>By {author}</List.Description>
      </List.Content>

    </List.Item>
  )
}
}

export default PostRow;
