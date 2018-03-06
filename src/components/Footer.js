import React from 'react'
import { Container, List, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{ margin: '2em 0em 0em', padding: '2em 0em', background: '#0a5094' }} >
    <Container textAlign='center'>
      <List horizontal inverted divided link>
        <List.Item as='a' href='#'>Site Map</List.Item>
        <List.Item as='a' href='#'>Contact Us</List.Item>
        <List.Item as='a' href='#'>Terms and Conditions</List.Item>
        <List.Item as='a' href='#'>Prsivacy Policy</List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer
