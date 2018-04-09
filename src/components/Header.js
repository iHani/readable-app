import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

class Header extends Component {

  handleChangeCategory = (e, { value }) => {
    history.push(`/${value}`);
  };

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

        {this.props.categories &&
          <Dropdown
            item
            simple
            text='Categories'
            options={this.props.categories}
            onChange={this.handleChangeCategory}
            defaultValue={this.props.selectedCategory}
            >
            </Dropdown>
          }

        </Container>
      </Menu>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const categories = state.categories.categories ?
  state.categories.categories.map(({ name, path }) => ({
    path,
    key: name,
    text: name,
    value: name,
  }))
  : []
  return { categories }
}

export default connect(mapStateToProps)(Header);
