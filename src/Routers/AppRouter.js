import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Header, Footer, PostsList, PostForm, SinglePost } from '../Components';

class AppRouter extends Component {

  render () {
    return (
      <BrowserRouter>
        <div>
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
                render={() => <PostForm />}
              />
              <Route
                path='/posts/:id'
                component={SinglePost}
              />
            </Switch>
          </Container>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
