import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Container, Icon, Modal } from 'semantic-ui-react';
import serializeForm from 'form-serialize';
import { editPost } from '../actions/posts';

class ModalEditPost extends Component {

  componentWillMount () {
    const title = this.props.content.title;
    const body = this.props.content.body;
    this.setState({ title, body });
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditPostSubmit = (e) => {
    const post = serializeForm(e.target, { hash: true });
    this.props.editPost(this.props.id, post);
  }

  render () {
    return (
      <Modal size='small' trigger={<Icon name='pencil' className='grey pointer' />}>
      <Modal.Header>Edit post: {this.state.title}</Modal.Header>
      <Modal.Content>

        <Form onSubmit={this.handleEditPostSubmit.bind(this)}>
          <Form.Field>
            <Form.Input
              name='title'
              label='Title'
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              name='body'
              label='Body'
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Container textAlign='center'>
            <Form.Button content='Submit' />
          </Container>
        </Form>

      </Modal.Content>
    </Modal>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
  editPost: (id, post) => dispatch(editPost(id, post)),
});

export default connect(undefined, mapDispatchToProps)(ModalEditPost);
