import React from 'react';

// simple component that displays the contact details
const ContactPage = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="jumbotron">
        <h1 className="display-4">Contact us</h1>
        <hr className="my-4" />
        <div className="contact-us">
          <p>Company name: New Technology Consulting AS</p>
          <p>Address: Dokkeskjærskaien 1, 5006 Bergen</p>
          <p>Phone: 55 31 81 51</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
