import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { PostRow, Sorter } from './index';

class CategoryPage extends Component {

  render () {
    const { currentCategory, posts } = this.props
    return (
      <Container text>
        <Header as='h1'>{currentCategory}</Header>

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
          {posts && posts.map(post => {
            return (
              <PostRow
                key={post.id}
                post={post}
              />
            )
          })}
          {posts.length === 0 && <p>No posts under this category!</p>}
        </List>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentCategory = ownProps.match.params.category
  const posts = state.posts.posts ?
  state.posts.posts.filter(post => post.category === currentCategory)
  : []
  return {
    posts,
    currentCategory
  }
}

export default connect(mapStateToProps)(CategoryPage);
