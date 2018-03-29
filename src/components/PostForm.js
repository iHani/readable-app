import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import uuid from 'uuid';
import * as BlogAPI from '../Utils/BlogAPI';
import { Container, Dropdown, Form, Radio } from 'semantic-ui-react';

const categories = [
  { key: 'm', name: 'cat', text: 'Male', value: 'male' },
  { key: 'f', name: 'cat', text: 'Female', value: 'female' },
]

class PostForm extends Component {

  state = {
    category: ''
  }

  handleCategoryChange = (e, { value }) => {
    console.log(value);
    this.setState({ category: value });
  }

  postFormSubmit (e, x) {
    const { category, title, body, author } = serializeForm(e.target, { hash: true });
    const post = {
      id: uuid(),
      timestamp: Date.now(),
      category,
      title,
      body,
      author,
    }
    BlogAPI.postPost(post)
  }


  render () {
    const { selectedCategory, title, body, author } = this.props
    return (
      <Container text style={{ marginTop: '1em' }}>
        <Form onSubmit={this.postFormSubmit}>

          <Form.Field>
            <label>Category</label>
            {/* <Dropdown search selection basic simple
              name='cat'
              placeholder='Select Country'
              options={categories}
              defaultValue={categories[0].value}
              onChange={this.handleCategoryChange}
            /> */}

            <select name='category'>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={title || undefined} name='title'/>
          </Form.Field>

          <Form.TextArea rows={8} label='Body' value={body || undefined} name='body'/>

          <Form.Field>
            <label>Author</label>
            <input placeholder='Your name' value={author || undefined} name='author'/>
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
