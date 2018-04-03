import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import uuid from 'uuid';
import * as BlogAPI from '../Utils/BlogAPI';
import { Container, Form } from 'semantic-ui-react';

class AddComment extends Component {

  submitNewComment (e) {
    const parentId = e.target.getAttribute('parentid');
    const { body, author } = serializeForm(e.target, { hash: true });
    const comment = {
      id: uuid(),
      parentId,
      body,
      author,
      timestamp: Date.now(),
    }
    BlogAPI.postComment(comment);
  }

  render () {
    return (
      <Form parentid={this.props.parentId} onSubmit={this.submitNewComment}>
        <Form.TextArea name='body' label='Comment' placeholder='Your comment...' />
        <Form.Input name='author' fluid label='Name' placeholder='Your name' />
        <Form.Field>
          <Container textAlign='center'>
            <Form.Button content='Submit' />
          </Container>
        </Form.Field>
      </Form>
    )
  }
}

export default AddComment;
