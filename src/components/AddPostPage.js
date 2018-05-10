import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

// component for adding a new post
class AddPostPage extends React.Component {
  // uses a proxy created in task 3 to fetch new posts when the user clicks Add post button
  onClick = () => {
    axios.get('https://ov86-ntc-proxy-api.herokuapp.com/posts')
      .then((response) => {
        // randomly picks a post from the array of posts returned by the API
        const randomPost = response.data[Math.floor(Math.random() * response.data.length)];
        // calls addPost action generator to add a new post to the redux store
        this.props.addPost(randomPost);
        // sends the user back to the homepage
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // returns the addPostPage component
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <h1 className="display-4">Add a new post</h1>
            <hr className="my-4" />
            <p className="lead">
              <button className="btn btn-info btn-lg" onClick={this.onClick}>Add new post</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// gives access to props and allows addPost to dispatch actions
const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post))
});

// connects the component to the redux store
export default connect(undefined, mapDispatchToProps)(AddPostPage);
