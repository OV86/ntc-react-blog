import React from 'react';
import PostsList from '../components/PostsList';

const HomePage = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="jumbotron">
        <h1 className="display-4">NTC React Blog</h1>
        <hr className="my-4" />
        <div className="posts">
          <PostsList />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
