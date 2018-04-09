import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon, List, Grid } from 'semantic-ui-react';
import { PostRow, Sorter } from './index';

class PostsList extends Component {

  render () {
    return (
      <Container className='flex-main'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container textAlign='left'>
                <Sorter />
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container textAlign='right'>
                <Link to='/posts'><Button className='ui primary button'><Icon name='plus' />New Post</Button></Link>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider></Divider>

        <List relaxed verticalAlign='middle'>
          {this.props.posts && this.props.posts.map(post => {
            return (
              <PostRow
                key={post.id}
                post={post}
              />
            )
          })}
        </List>

      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps)(PostsList);
