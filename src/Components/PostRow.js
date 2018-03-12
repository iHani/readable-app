import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, List } from 'semantic-ui-react';

class PostRow extends Component {

  render () {
    const { id, voteScore, commentCount, category, title, author } = this.props.post

    return (
      <List.Item>

        <List.Content floated='right'>
          <Label as='a' color='green'>
            {category}
          </Label>
          <Label>
            <List.Icon name='comments' /> {commentCount}
          </Label>
          <Link to='/'><List.Icon name='pencil' style={{color: 'grey'}}/></Link>
          <Link to='/'><List.Icon name='trash' style={{color: 'red'}}/></Link>
        </List.Content>

        <List.Content floated='left'>
          <Link to={`/posts/${id}/upVote`}><List.Icon name='caret up' /></Link>
          {voteScore}
          <Link to={`/posts/${id}/downVote`}><List.Icon name='caret down' /></Link>
        </List.Content>

        <List.Content floated='left'>
          <Link to={`/posts/${id}`}>
            <List.Header>{title}</List.Header>
          </Link>
          <List.Description>By {author}</List.Description>
        </List.Content>

      </List.Item>
    )
  }
}

export default PostRow;
