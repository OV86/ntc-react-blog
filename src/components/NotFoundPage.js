import React from 'react';
import { Link } from 'react-router-dom';

// Page not found component that gets displayed every time a route is not found
const NotFoundPage = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="jumbotron">
        <h1 className="display-4">Oops, page not found!</h1>
        <hr className="my-4" />
        <p className="lead">
          <Link to="/">
            <button className="btn btn-success btn-lg">Go home</button>
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
