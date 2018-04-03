import React, { Component } from 'react';
import uuid from 'uuid';
import * as BlogAPI from '../Utils/BlogAPI';
import { Container, Form } from 'semantic-ui-react';

class PostForm extends Component {

  state = {
    categories: [],
    post: {
      title: '',
      body: '',
    },
    newPost: this.props.newPost || true
  }

  postFormSubmit () {
// console.log(this.state);
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    console.log(id);
    if (id) {
      BlogAPI.getPost(id).then(post => this.setState({ ...post }));
    }
    BlogAPI.getAllCategories().then(categories => this.setState({ categories: categories.categories }));
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { title, body, author } = this.state;
    return (
      <Container text style={{ marginTop: '1em' }}>

        <Form onSubmit={this.postFormSubmit.bind(this)}>

          <Form.Field>
            <label>Category</label>
            <select name='category' onChange={this.handleInputChange}>
              {this.state.categories.map(category => {
                const { name } = category
                return <option key={name} value={name}>{name}</option>
              })}
            </select>

          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' value={title} name='title' onChange={this.handleInputChange}/>
          </Form.Field>

          <Form.TextArea rows={8} label='Body' value={body} name='body' onChange={this.handleInputChange}/>

          <Form.Field>
            <label>Author</label>
            <input placeholder='Your name' value={author} name='author' onChange={this.handleInputChange}/>
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
