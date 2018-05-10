// import React from 'react';
// import { connect } from 'react-redux';
// import { deletePost } from '../actions/posts';

// class PostListItem extends React.Component {
//   onRemove = () => {
//     this.props.deletePost({ id: this.props.post.id });
//   }

//   render() {
//     return (
//       <div>
//         <h3>{this.props.post.title}</h3>
//         <p>{this.props.post.body}</p>
//         <p>Created: {this.props.post.createdAt}</p>
//         <p>User ID: {this.props.post.userId}</p>
//         <button onClick={this.onRemove} >Delete post</button>
//       </div>
//     );
//   }
// }

// // const mapStateToProps = (state, props) => ({
// //   post: state.posts.find((post) => post.id === props.match.params.id)
// // });

// // const mapStateToProps = (state, props) => ({
// //   post: state.posts
// // });

// const mapStateToProps = (state, props) => {
//   console.log(state);
//   console.log(props);
//   return {
//     post: state.posts
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   deletePost: (post) => dispatch(deletePost(post))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);

// SECOND VERSION XXXXXXXX

// import React from 'react';
// import { Link } from 'react-router-dom';

// const PostListItem = ({
//   userId,
//   title,
//   body,
//   createdAt,
//   id
// }) =>
//   (
//     <div>
//       <Link to={`/edit/${id}`}>
//         <h3>{description}</h3>
//       </Link>
//       <p>{amount}</p>
//       <p>{note}</p>
//       <p>{createdAt}</p>
//     </div>
//   );

// export default ExpenseListItem;

// XXXXXXXXXXX

import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({
  userId,
  title,
  body,
  createdAt,
  id
}) =>
  (
    <div className="post-list-item">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Created: {createdAt}</p>
      <Link to={`/posts/${id}`}>
        <button className="btn btn-info btn-lg">More</button>
      </Link>
    </div>
  );

export default PostListItem;
