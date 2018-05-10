import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';

// Checks if the posts array is empty. If empty, displays "no posts"
// Returns the PostListItem if array not empty. Using map to iterate over the array
const PostsList = (props) => (
  <div>
    {
      props.posts.length === 0 ? (
        <p>No posts</p>
      ) : (
          props.posts.map((post) => {
            return <PostListItem key={post.id} {...post} />;
          })
        )
    }
  </div>
);

// Maps state to props and returns a posts object that is used above
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};
// creates a connection to the redux store
export default connect(mapStateToProps)(PostsList);
