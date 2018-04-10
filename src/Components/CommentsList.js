import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { Voter } from './index';

class CommentsList extends Component {

  HandleDeleteComment = (id) => {
    // BlogAPI.deleteComment(id).then(res => console.log(`post ${res.id} deleted`))
    // console.log('deleted?', id);
  }

  render () {
    return (
      <List divided relaxed>
        {this.props.comments && this.props.comments.map(comment => {
            const { id, voteScore, author, body  } = comment
            return (
              <List.Item key={id}>

                <List.Content floated='left'>
                  <Voter
                    type='comment'
                    id={id}
                    voteScore={voteScore}
                  />
                </List.Content>

                <List.Content floated='right'>
                  <Link to='/'><List.Icon name='pencil' style={{color: 'grey'}} /></Link>
                  <Link to='/'><List.Icon name='trash' style={{color: 'red'}} onClick={() => this.HandleDeleteComment(id)}/></Link>
                </List.Content>

                <List.Content floated='left'>
                  <List.Header>{author}:</List.Header>
                  {body}
                </List.Content>

              </List.Item>
            )
          })}
        </List>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      comments: state.comments.comments
    }
  }

  export default connect(mapStateToProps)(CommentsList);
