import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

class Header extends Component {

  componentWillMount () {
    // BlogAPI.getAllCategories().then(categories => this.setState({ categories: this.serializeCategories(categories.categories) }));
  }

  render () {
    return (
      <Menu fixed='top' inverted style={{background: '#0a5094'}}>
        <Container>
          <Link to='/'>
          <Menu.Item as='h2' header>Readable</Menu.Item>
        </Link>

        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        {/* <select name='category'>
          <option key={'name'} value={'name'}>{'name'}</option>
        </select> */}

        <Dropdown
          item
          simple
          text='Categories'
          // options={() => categories.map(cat => Object.assign(cat, {key: cat.key, text: cat.name}))}
          >
        </Dropdown>

      </Container>
    </Menu>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(Header);
