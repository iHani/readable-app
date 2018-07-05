import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Header, Icon, Label } from 'semantic-ui-react';
import { AddComment, CommentsList, Voter, ModalEditPost, NotFoundPage } from './index';
import { fetchComments } from '../Actions/comments';
import { deletePost } from '../Actions/posts';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });


class SinglePost extends Component {

  componentDidMount = () => this.props.fetchComments(this.props.match.params.id);

  HandleDeletePost = (id) => {
    this.props.deletePost(id);
    history.push(`/`);
  }

  render() {
    if (!this.props.post) {
      return <NotFoundPage />
    } else {
      const { id, voteScore, title, category, author, body, timestamp, commentCount } = this.props.post;
      return (
        <Container text style={{ marginTop: '1em' }}>
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
                  By <strong>{author}</strong> on {new Date(timestamp).toLocaleDateString()}
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
      </Container>
    )
  }
}
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const post = state.posts.posts.find(p => p.id === id);
  if (state.posts.postsAreFetched && post) {
    return {
      post
    };
  }
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  fetchComments: (parentId) => dispatch(fetchComments(parentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
