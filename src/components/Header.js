import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu } from 'semantic-ui-react'

const Header = () => (
  <Menu fixed='top' inverted style={{background: '#0a5094'}}>
    <Container>
      <Menu.Item as='h2' header>Readable</Menu.Item>
      <Menu.Item>
        <Link to='/'>Home
      </Link>
    </Menu.Item>

    <Dropdown item simple text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>React</Dropdown.Item>
        <Dropdown.Item>Redux</Dropdown.Item>
        <Dropdown.Item>JavaScript</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Container>
</Menu>
)

export default Header
