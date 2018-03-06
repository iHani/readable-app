import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Container, Dropdown, Icon, Grid } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import PostsList from './PostsList';

const somfin = 'somfin'

class CategoryPage extends Component {

  render () {
    return (
      <Container>

        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container textAlign='left'>
                <Link to='/new'>
                <Button className='ui primary button'><Icon name='plus' />New Post</Button>
              </Link>
            </Container>
          </Grid.Column>
          <Grid.Column width={8}>
            <Container textAlign='right'>
              <Dropdown simple text={`Sort by ${somfin}`}>
                <Dropdown.Menu>
                  <Dropdown.Item text='Newest' />
                  <Dropdown.Item text='Oldest' />
                  <Dropdown.Item text='Highest rating' />
                  <Dropdown.Item text='Lowest rating' />
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider></Divider>

      <List relaxed verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Rating icon='star' defaultRating={3} maxRating={5} />
          </List.Content>
          <List.Content floated='right'>
            <Label as='a' color='green'>
              Redux
            </Label>
          </List.Content>
          <List.Icon name='sticky note' size='large' />
          <List.Content>
            <List.Header as='a'>Semantic UI React Fixed Template</List.Header>
            <List.Description>By Daniel Louise on 12/8/2016.</List.Description>
          </List.Content>
        </List.Item>
      </List>

    </Container>

  )
}
}

export default CategoryPage
