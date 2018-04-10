import React, { Component } from 'react';
import uuid from 'uuid';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { Container, Form } from 'semantic-ui-react';
import { postPost, fetchPosts } from '../actions/posts';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

class PostForm extends Component {
  //
  // state = {
  //   id: '',
  //   timestamp: '',
  //   title: '',
  //   body: '',
  //   author: '',
  //   category: '',
  // }

  postFormSubmit (e) {
    console.log('submitted');

    const { title, body, author, category } = serializeForm(e.target, { hash: true });
    const post = {
      id: uuid(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    }
    // console.log(post);
    this.props.postPost(post)
    this.props.fetchPosts()
    history.push(`/posts/${post.id}`);

  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    return (
      <Container text style={{ marginTop: '1em' }}>

        <Form onSubmit={this.postFormSubmit.bind(this)}>

          <Form.Field>
            <label>Category</label>
            <select name='category'
              onChange={this.handleInputChange}>
              {this.props.categories.map(category => {
                const { name } = category
                return <option key={name} value={name}>{name}</option>
              })}
            </select>

          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' name='title' onChange={this.handleInputChange}/>
          </Form.Field>

          <Form.TextArea rows={8} label='Body' name='body' onChange={this.handleInputChange}/>

          <Form.Field>
            <label>Author</label>
            <input placeholder='Your name' name='author' onChange={this.handleInputChange}/>
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

const mapStateToProps = (state, ownProps) => {
  console.log('PostForm', state);
  return {
    categories: state.categories.categories
  }
};

const mapDispatchToProps = dispatch => ({
  postPost: (post) => dispatch(postPost(post)),
  fetchPosts: () => dispatch(fetchPosts())

});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
