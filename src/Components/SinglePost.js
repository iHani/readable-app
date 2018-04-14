import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Header, Icon, Label } from 'semantic-ui-react';
import { AddComment, CommentsList, Voter, ModalEditPost } from './index';
import { fetchComments } from '../actions/comments';
import { deletePost } from '../actions/posts';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

class SinglePost extends Component {

  componentDidMount () {
    this.props.fetchComments(this.props.match.params.id);
  }
  HandleDeletePost = (id) => {
    this.props.deletePost(id);
    history.push(`/`);
  }

  render() {
    const { id, voteScore, title, category, author, body, timestamp, commentCount } = this.props.post;
    return (
      <Grid columns='equal'>
        <Grid.Column width={1}>
          <Voter
            type='post'
            id={id}
            voteScore={voteScore}
          />
        </Grid.Column>
        <Grid.Column width={14}>
          <Container>
            <Header size='large'>{title}
              <Link to={`/${category}`}>
              <Label color='green'>{category}</Label>
            </Link>
            <Header.Subheader>
              By <strong>{author}</strong> on {moment(timestamp).calendar()}
            </Header.Subheader>
          </Header>

          <Container text className='pt-1 pb-2'>
            <p>
              {body}
            </p>
          </Container>

          <Container floated='right'>
            <span className="red center-item size-20px pointer" name='trash' onClick={() => this.HandleDeletePost(id)} >
              <Icon name='trash' />
            </span>
            <ModalEditPost id={id} content={{ title, body }} />
          </Container>

          <Container>
            <Divider horizontal>Comments ({commentCount}) </Divider>
            {!commentCount && <p>No comments yet!</p>}
            <CommentsList />
          </Container>

          <Divider horizontal>Add new comment</Divider>
          <AddComment parentId={id} />
        </Container>
      </Grid.Column>
    </Grid>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  if (state.posts.postsAreFetched) {
    // TODO: postsAreFetched is not enough, check also if this post exist or redirect to 404
    return {
      post: state.posts.posts.find(post => post.id === ownProps.match.params.id),
      comments: state.comments.comments
    };
  } else {
    return {
      post: {},
      comments: []
    };
  }
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  fetchComments: (parentId) => dispatch(fetchComments(parentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
