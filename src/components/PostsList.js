import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon, List, Dropdown, Grid  } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';
import PostRow from './PostRow';

const somfin = 'somfin';

class PostsList extends Component {

  state = {
    posts: [],
    sortOptions: [
      { value: 'Newest', text: 'Newest' },
      { value: 'Oldest', text: 'Oldest' },
      { value: 'Highest rating', text: 'Highest rating' },
      { value: 'Lowest rating', text: 'Lowest rating' }
    ]
  }

  componentDidMount () {
    BlogAPI.getAllPosts().then(posts => console.log(posts));
    BlogAPI.getAllPosts().then(posts => this.setState({ posts }));
  }

  render () {
    // console.log(this.props);
    return (
      <Container>

        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container textAlign='left'>
                <Link to='/posts'>
                <Button className='ui primary button'><Icon name='plus' />New Post</Button>
              </Link>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container textAlign='right'>
              <Dropdown
                simple
                text={`Sort by ${somfin}`}
                options={this.state.sortOptions}
                >
                </Dropdown>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider></Divider>

        <List relaxed verticalAlign='middle'>
          {this.state.posts && this.state.posts.map(post => {
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

export default PostsList

// export default PostsList;
