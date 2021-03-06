import React from 'react';

const PageNotFound = () => (
  <div className="text-center mt-5">
    <h3 className="text-cool-blue">404 page not found</h3>
    <p className="text-muted">
      We are sorry but the page you are looking for does not exist on bucketlists.
      Click <a className="card-link text-cool-blue" href="/login">here</a> to login.
    </p>
  </div>
);
export default PageNotFound;
