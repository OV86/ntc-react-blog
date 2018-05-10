import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

class AddPostPage extends React.Component {
  onClick = () => {
    axios.get('https://ov86-ntc-proxy-api.herokuapp.com/posts')
      .then((response) => {
        const randomPost = response.data[Math.floor(Math.random() * response.data.length)];
        this.props.addPost(randomPost);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
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

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
