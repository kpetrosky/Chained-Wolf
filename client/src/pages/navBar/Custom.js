import React from 'react';

export default function Contact() {
  return (
    <main className='container contact-container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className="text-center">Custom Work Request</h1>
          <form className='needs-validation'>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              <div className="invalid-tooltip">
                Please enter a valid email.
              </div>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Full Name</label>
              <input type="text" className="form-control" id="InputPassword1" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="metalFormControlSelect1">What are you looking for?</label>
              <select className="form-control" id="metalFormControlSelect1">
                <option>Select an option for metal type:</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Steel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="jewelryFormControlSelect1">What are you looking for?</label>
              <select className="form-control" id="jewelryFormControlSelect1">
                <option>Type of Jewelry:</option>
                <option>Necklace</option>
                <option>Bracelet</option>
                <option>Earrings</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="designFormControlSelect1">What are you looking for?</label>
              <select className="form-control" id="designFormControlSelect1">
                <option>I would like you to make</option>
                <option>A Horse</option>
                <option>A plant</option>
                <option>Something abstract</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="FormControlTextarea1">Additional Details</label>
              <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
