import React, { Component } from 'react';
import { Container, Dropdown, Select, Form } from 'semantic-ui-react';

const categories = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class PostForm extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render () {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Form>

          <Form.Field>
            <label>Category</label>
            <Dropdown placeholder='Select Country' fluid search selection options={categories} />
          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' />
          </Form.Field>

          <Form.TextArea rows={8} label='Body' />

          <Form.Field>
            <label>Author</label>
            <input placeholder='Author' />
          </Form.Field>

          <Form.Field>
            <Container textAlign='center'>
              <Form.Button content='Submit' />
            </Container>
          </Form.Field>

        </Form>
      </Container>
    )
  }
}

export default PostForm;
