import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Header, Label, List } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';
import { AddComment, CommentsList, Voter } from './index';
import { getAllPosts, addPost, editPost, deletePost } from '../actions'

class SinglePost extends Component {

  state = {
    post: {},
    comments: []
  }

  componentDidMount () {
    const self = this
    const id = self.props.match.params.id
    BlogAPI.getPost(id).then(post => self.setState({ post }))
    BlogAPI.getComments(id).then(comments => self.setState({ comments }))
  }

  HandleDeletePost = (id) => {
    BlogAPI.deletePost(id).then(res => console.log(`post ${res.id} deleted`))
    // console.log('deleted?', id);
  }

  HandleEditPost = (id) => {
    // BlogAPI.editPost(id).then(res => console.log('res', res))
    // console.log('deleted?', id);
  }




  render() {
    const { id, voteScore } = this.state.post
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
            <Header size='large'>{this.state.post.title}
              <Label color='green'>{this.state.post.category}</Label>
              <Header.Subheader>
                By <strong>{this.state.post.author}</strong> on {moment(this.state.post.timestamp).calendar()}
              </Header.Subheader>
            </Header>

            <Container text className='pt-1 pb-2'>
              <p>
                {this.state.post.body}
              </p>
            </Container>
            <Container floated='right'>
              <Link to={`/posts/${id}/edit`}><List.Icon name='pencil' style={{color: 'grey'}} onClick={() => this.HandleEditPost(id)}/></Link>
              <Link to='/'><List.Icon name='trash' style={{color: 'red'}}/></Link>
            </Container>

            {this.state.post.commentCount > 0 &&
              <Container>
                <Divider horizontal>Comments ({this.state.post.commentCount}) </Divider>
                <CommentsList comments={this.state.comments} />
              </Container>
            }

            <Divider horizontal>Add new comment</Divider>
            <AddComment parentId={this.props.match.params.id} />
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps ({ posts, categories }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    posts: [],
    calendar: ''
  }
}

function mapDispatchToProps (dispatch) {
  return {
    newPost: post => dispatch(addPost(post)),
    editPost: (id, post) => dispatch(editPost(id, post)),
    deletePost: id => dispatch(deletePost(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost)
