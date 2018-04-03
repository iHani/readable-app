import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Header, Footer, PostsList, PostForm, SinglePost } from '../Components';

class AppRouter extends Component {

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
                render={() => <PostsList />}
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
              />
              <Route
                exact
                path='/posts/:id/edit'
                component={PostForm}
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

export default AppRouter;
