import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, List } from 'semantic-ui-react';
import { Voter, ModalEditComment } from './index';
import { deleteComment } from '../actions/comments';

class CommentsList extends Component {

  HandleDeleteComment = (id) => this.props.deleteComment(id);

  render () {
    return (
      <List divided relaxed>
        {this.props.comments && this.props.comments.map(comment => {
            const { id, voteScore, author, body, timestamp  } = comment;
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
                  <span className="red center-item size-15px pointer" name='trash' onClick={() => this.HandleDeleteComment(id)} >
                    <Icon name='trash' />
                  </span>
                  <ModalEditComment id={id} content={{ timestamp, body }}/>
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
    };
  }


  const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
