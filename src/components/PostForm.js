import React, { Component } from 'react';
import uuid from 'uuid';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { Container, Form, Header } from 'semantic-ui-react';
import { postPost, fetchPosts } from '../Actions/posts';
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
        <Header size='large'>Create new post</Header>

        <Form onSubmit={this.postFormSubmit.bind(this)}>

          <Form.Field required>
            <label>Category</label>
            <select name='category' required>
              {this.props.categories.map(({ name }) => <option key={name} value={name}>{name}</option>)}
            </select>
          </Form.Field>

          <Form.Field required>
            <label>Title</label>
            <input placeholder='Title' name='title' required/>
          </Form.Field>

          <Form.TextArea rows={8} label='Body' name='body' required/>

          <Form.Field required>
            <label>Author</label>
            <input placeholder='Your name' name='author' required/>
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
