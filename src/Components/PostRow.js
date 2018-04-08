import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BlogAPI from '../Utils/BlogAPI';
import { Icon, Label, List } from 'semantic-ui-react';
import { Voter } from './index';

class PostRow extends Component {

  HandleDeletePost = (id) => {
    BlogAPI.deletePost(id).then(res => console.log(`post ${res.id} deleted`))
  }
  render () {
    const { id, voteScore, commentCount, category, title, author } = this.props.post

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
          <Label as='a' color='green'>{category}</Label>
          <Label>
            <List.Icon name='comments' /> {commentCount}
          </Label>
          <Link to='/'><Icon name='pencil' style={{color: 'grey'}} /></Link>
          <Link to='/'><Icon name='trash' style={{color: 'red'}} onClick={() => this.HandleDeletePost(id)}/></Link>
        </List.Content>

        <List.Content floated='left'>
          <Link to={`/posts/${id}`}><h3>{title}</h3></Link>
          <List.Description>By {author}</List.Description>
        </List.Content>

      </List.Item>
    )
  }
}

export default PostRow;
