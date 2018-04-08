import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Header, Label, List } from 'semantic-ui-react';
import { AddComment, CommentsList, Voter } from './index';
import { fetchPost } from '../actions/posts';

class SinglePost extends Component {

  HandleDeletePost = (id) => {
    // BlogAPI.deletePost(id).then(res => console.log(`post ${res.id} deleted`))
  }

  HandleEditPost = (id) => {
    // BlogAPI.editPost(id).then(res => console.log('res', res))
    // console.log('deleted?', id);
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
              <Label color='green'>{category}</Label>
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
              <Link to={`/posts/${id}/edit`}><List.Icon name='pencil' style={{color: 'grey'}} onClick={() => this.HandleEditPost(id)}/></Link>
              <Link to='/'><List.Icon name='trash' style={{color: 'red'}}/></Link>
            </Container>

            {commentCount > 0 &&
              <Container>
                <Divider horizontal>Comments ({commentCount}) </Divider>
                <CommentsList parentId={id} />
              </Container>
            }

            <Divider horizontal>Add new comment</Divider>
            <AddComment parentId={id} />
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

// const initPost = { id: "statuicddididii", timestamp: 1467166872634, title: "STATIC POST", body: "Everyone says so after all.", voteScore: 850, commentCount: 7, author: 'thing three', category: 'REDUX', comments: [] }

const mapStateToProps = (state, ownProps) => {
  if (state.posts.isPostsFetched) {
    return {
      post: state.posts.posts.find(post => post.id === ownProps.match.params.id),
    }
  } else {
    return {
      post: {}
    }
  }
}


const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
