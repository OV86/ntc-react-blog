import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';
import NotFoundPage from './NotFoundPage';

// lists the content and details of each post and allows to delete the PostListItem component
class PostDetailsPage extends React.Component {
  // calls the deletePost action generator that deletes a post
  // Takes 1 argument which is an object with the post ID
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
/* Maps state to props and finds a post from the posts array that matches the
route parameter ID with the post id. Post ID needs to be converted to string format  */
const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id.toString() === props.match.params.id)
  };
};

// maps dispatch to props and gives acces to the deletePost action generator
const mapDispatchToProps = (dispatch) => ({
  deletePost: (post) => dispatch(deletePost(post))
});

// connect the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);
