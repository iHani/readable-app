import React, { Component } from 'react';
import moment from 'moment'
import { Container, Divider, Header, Label } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';
import { AddComment, CommentsList } from './index';

class SinglePost extends Component {

  state = {
    post: {}, // should return object of the post
    comments: []
  }

  componentDidMount () {
    const id = this.props.match.params.id
    BlogAPI.getPost(id).then(post => this.setState({ post }))
    BlogAPI.getComments(id).then(comments => this.setState({ comments }))
    BlogAPI.getPost(id).then(post => console.log(post))
    BlogAPI.getComments(id).then(comments => console.log(comments))
  }
  render() {
    return (
      <div>
        <Header size='large'>{this.state.post.title}
          <Label color='green'>{this.state.post.category}</Label>
        </Header>
        <p>By <strong>{this.state.post.author}</strong> on {moment(this.state.post.timestamp).calendar()}</p>
        <Container>{this.state.post.body}</Container>
        <p>voteScore: {this.state.post.voteScore}</p>

        <Divider horizontal>Comments ({this.state.post.commentCount || 0})</Divider>

        {this.state.post.commentCount > 0 &&
          <CommentsList comments={this.state.comments} />
        }

        <AddComment />
      </div>
    )
  }
}

export default SinglePost;
