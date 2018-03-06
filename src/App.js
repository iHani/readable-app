import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

class App extends Component {

  render () {
    return (
      <div>
        <Header />

        <Container text style={{ marginTop: '7em' }}>
          <Route
            exact
            path='/'
            render={() => <PostsList />}
          />
          <Route
            path='/new'
            render={() => <PostForm />}
          />
        </Container>

        <Footer />
      </div>
    )
  }
}

export default App
