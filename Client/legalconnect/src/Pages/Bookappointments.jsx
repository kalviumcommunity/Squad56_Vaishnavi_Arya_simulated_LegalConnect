import React from 'react';


const BookAppointment = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Book an Appointment</h2>
      <form className="book-appointment-form mt-4">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
