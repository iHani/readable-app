import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Label, List } from 'semantic-ui-react';
import { Voter, ModalEditPost } from './index';
import { fetchPosts, deletePost } from '../actions/posts';

class PostRow extends Component {

  HandleDeletePost = () => this.props.deletePost(this.props.post.id);

  render () {
    const { id, voteScore, commentCount, category, title, body, author, timestamp } = this.props.post;

    return (
      <List.Item>

        <List.Content floated='left'>
          <Voter
            type='post'
            id={id}
            voteScore={voteScore}
          />
        </List.Content>

        <List.Content floated='right'>
          <Link to={`/${category}`}>
            <Label color='green'>{category}</Label>
          </Link>
          <Label>
            <List.Icon name='comments' /> {commentCount}
          </Label>

          <ModalEditPost id={id} content={{ title, body }}/>

          <Link to='/'><Icon name='trash' style={{color: 'red'}} onClick={this.HandleDeletePost}/></Link>
        </List.Content>

        <List.Content floated='left'>
          <Link to={`/posts/${id}`}><h3>{title}</h3></Link>
          <List.Description>By <strong>{author}</strong> {new Date(timestamp).toLocaleDateString()}</List.Description>
        </List.Content>

      </List.Item>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const postArr = state.posts.posts.filter(({ id }) => id === ownProps.id);
  const post = Object.assign({}, ...postArr);
  return {
    post
  };
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostRow);
