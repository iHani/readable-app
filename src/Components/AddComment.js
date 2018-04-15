import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Container, Form } from 'semantic-ui-react';
import { postComment } from '../actions/comments';
import { fetchPosts } from '../actions/posts';

class AddComment extends Component {

  state = {
    body: '',
    author: '',
  }

  submitNewComment (e) {
    const parentId = e.target.getAttribute('parentid');
    const { body, author } = serializeForm(e.target, { hash: true });
    const comment = {
      id: uuid(),
      parentId,
      timestamp: Date.now(),
      body,
      author,
    }
    this.props.postComment(comment);
    this.props.fetchPosts();
    this.setState({ body: '', author: '' });
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    return (
      <Form parentid={this.props.parentId} onSubmit={this.submitNewComment.bind(this)}>
        <Form.TextArea name='body' label='Comment' placeholder='Your comment...'  value={this.state.body} onChange={this.handleInputChange} required/>
        <Form.Input name='author' fluid label='Name' placeholder='Your name' value={this.state.author} onChange={this.handleInputChange} required/>
        <Form.Field>
          <Container textAlign='center'>
            <Form.Button content='Submit' />
          </Container>
        </Form.Field>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (comment) => dispatch(postComment(comment)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(undefined, mapDispatchToProps)(AddComment);
