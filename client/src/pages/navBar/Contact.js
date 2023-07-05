import React from 'react';

export default function Contact() {

  return (
    <main className='container contact-container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className="text-center">Contact Page</h1>
          <form className='needs-validation'>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              <div class="invalid-tooltip">
                Please enter valid email.
              </div>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Full Name</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="fullName" required />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
