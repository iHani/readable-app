import React, { Component } from 'react';
import uuid from 'uuid';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { Container, Form } from 'semantic-ui-react';
import { postPost, fetchPosts } from '../actions/posts';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

class PostForm extends Component {

  postFormSubmit (e) {
    const { title, body, author, category } = serializeForm(e.target, { hash: true });
    const post = {
      id: uuid(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    }
    this.props.postPost(post);
    this.props.fetchPosts();
    history.push(`/posts/${post.id}`);
  }

  render () {
    return (
      <Container text style={{ marginTop: '1em' }}>

        <Form onSubmit={this.postFormSubmit.bind(this)}>

          <Form.Field>
            <label>Category</label>
            <select name='category'>
              {this.props.categories.map(({ name }) => <option key={name} value={name}>{name}</option>)}
            </select>

          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' name='title' />
          </Form.Field>

          <Form.TextArea rows={8} label='Body' name='body' />

          <Form.Field>
            <label>Author</label>
            <input placeholder='Your name' name='author' />
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

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories.categories
});

const mapDispatchToProps = (dispatch) => ({
  postPost: (post) => dispatch(postPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
