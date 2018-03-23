import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from 'semantic-ui-react';

class AddComment extends Component {

  render () {
    return (
      <Form>
        <Form.TextArea label='Comment' placeholder='Your comment...' />
        <Form.Input fluid label='Name' placeholder='Your name' />
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
