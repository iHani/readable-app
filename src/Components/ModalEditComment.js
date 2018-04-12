import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Container, Icon, Modal } from 'semantic-ui-react'
import serializeForm from 'form-serialize';
import { editComment } from '../actions/comments';

class ModalEditComment extends Component {

  componentWillMount = () => this.setState({ body: this.props.content.body })

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleEditCommentSubmit = (e) => {
    const comment = serializeForm(e.target, { hash: true });
    comment.timestamp = Date.now()
    this.props.editComment(this.props.id, comment)
  }

  render () {
    return (
      <Modal size='small' trigger={<Icon name='pencil' className='grey pointer' />}>
      <Modal.Header>Edit comment:</Modal.Header>
      <Modal.Content>
        <Form onSubmit={this.handleEditCommentSubmit.bind(this)}>
          <Form.Field>
            <Form.TextArea
              name='body'
              label='Body'
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Container textAlign='center'>
            <Form.Button content='Submit' onClick={this.close} />
          </Container>
        </Form>

      </Modal.Content>
    </Modal>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
  editComment: (id, comment) => dispatch(editComment(id, comment)),
});

export default connect(undefined, mapDispatchToProps)(ModalEditComment);
