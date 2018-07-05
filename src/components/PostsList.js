import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon, List, Grid } from 'semantic-ui-react';
import { PostRow, Sorter } from './index';
import { sortBy } from '../Actions/sorting';

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
          {this.props.posts.length === 0 && <p>No posts to display!</p>}
          {this.props.posts && this.props.posts.map(({ id }) => <PostRow key={id} id={id} />)}
        </List>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const selectedSortBy = state.sorting.selectedSortBy;
  return {
    selectedSortBy, // I don't really need this just added it so redux can keep track of its changes in this component!
    posts: sortBy(state.posts.posts, selectedSortBy)
  }
}

export default connect(mapStateToProps)(PostsList);
