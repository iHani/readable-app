import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import * as BlogAPI from '../Utils/BlogAPI';

class Header extends Component {

  state = {
    categories: []
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
    return (
      <Menu fixed='top' inverted style={{background: '#0a5094'}}>
        <Container>
          <Menu.Item as='h2' header>Readable</Menu.Item>
          <Menu.Item>
            <Link to='/'>Home
          </Link>
        </Menu.Item>

        <Dropdown
          item
          simple
          text='Categories'
          options={this.state.categories}
          >
          </Dropdown>
        </Container>
      </Menu>
    )
  }
}


export default Header;
