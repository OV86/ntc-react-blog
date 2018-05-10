import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';
import NotFoundPage from './NotFoundPage';

class PostDetailsPage extends React.Component {
  onRemove = () => {
    this.props.deletePost({ id: this.props.post.id });
    this.props.history.push('/');
  };

  render() {
    try {
      return (
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-4">Post details</h1>
              <hr className="my-4" />
              <div className="post-details">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <p>Created: {this.props.post.createdAt}</p>
                <p>Created by user ID: {this.props.post.userId}</p>
                <button onClick={this.onRemove} className="btn btn-warning btn-lg">Delete post</button>
              </div>
            </div>
          </div>
        </div>
      );
    } catch (err) {
      return (
        <div>
          <NotFoundPage />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id.toString() === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (post) => dispatch(deletePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);
