import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Header, Footer, PostsList, PostForm, SinglePost } from '../Components';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

class AppRouter extends Component {

  componentWillMount () {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

  render () {
    return (
      <BrowserRouter>
        <div className="flex-container">
          <Header />
          <Container text style={{ marginTop: '7em' }}>
            <Switch>
              <Route
                exact
                path='/'
                // component={PostsList}
                render={() => <PostsList posts={this.props.posts} />}

              />
              <Route
                exact
                path='/posts'
                component={PostForm}
              />
              <Route
                exact
                path='/posts/:id'
                component={SinglePost}
                // render={() => <SinglePost xxxxxxxxxxxx={true} />}

              />
              <Route
                exact
                path='/posts/:id/edit'
                component={PostForm}
                // render={() => <PostForm editing={true} />}
              />
              {/* <Route
                path='/:category/posts'
                component={CategoryPage}
              /> */}

            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
