import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Container, Icon, Modal } from 'semantic-ui-react'
import serializeForm from 'form-serialize';
import { editComment } from '../Actions/comments';

class ModalEditComment extends Component {

  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  componentWillMount = () => this.setState({ body: this.props.content.body });

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleEditCommentSubmit = (e) => {
    const comment = serializeForm(e.target, { hash: true });
    comment.timestamp = Date.now();
    this.props.editComment(this.props.id, comment);
    this.close()
  }

  render () {
    return (
      <Modal
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Icon name='pencil' className='grey pointer' />}>
        <Modal.Header>Edit comment:</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleEditCommentSubmit.bind(this)}>
            <Form.Field>
              <Form.TextArea
                name='body'
                label='Body'
                value={this.state.body}
                onChange={this.handleInputChange}
                required
              />
            </Form.Field>
            <Container textAlign='center'>
              <Form.Button content='Submit' onClick={this.clode} />
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
