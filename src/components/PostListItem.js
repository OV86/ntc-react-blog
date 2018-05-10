import React from 'react';
import { Link } from 'react-router-dom';

// Displays the individual blog post item. Takes an object as an argument.
// Using destructuring to get the required variables.
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
