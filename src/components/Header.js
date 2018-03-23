import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';

class Header extends Component {

  state = {
    categories: [],
    posts: []
  }

  serializeCategories (categories) {
    return categories.map((category, index) => {
      return {
        value: index,
        text: category.name,
        path: category.path
      }
    })
  }

  componentDidMount () {
    BlogAPI.getAllCategories().then(categories => this.setState({ categories: this.serializeCategories(categories.categories) }));
  }

  render () {
    const { categories } = this.state
    return (
      <Menu fixed='top' inverted style={{background: '#0a5094'}}>
        <Container>
          <Link to='/'>
          <Menu.Item as='h2' header>Readable</Menu.Item>
        </Link>

        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Dropdown
          item
          simple
          text='Categories'
          options={categories}
          >
          </Dropdown>

        </Container>
      </Menu>
    )
  }
}

export default Header;
