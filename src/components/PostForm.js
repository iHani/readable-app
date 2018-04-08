import React, { Component } from 'react';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { Container, Form } from 'semantic-ui-react';

class PostForm extends Component {

  postFormSubmit () {
    console.log('submitted');
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
              {/* {this.props.categories.map(category => {
                const { name } = category
                return <option key={name} value={name}>{name}</option>
              })} */}
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
  return {
    categories: 'state.posts.posts'
  }
};

// const mapDispatchToProps = dispatch => ({
//   fetchCategories: '() => dispatch(fetchCategories())'
// });

export default connect(mapStateToProps)(PostForm);
