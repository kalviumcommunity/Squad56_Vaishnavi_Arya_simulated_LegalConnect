import React from 'react';
import './lawyer.css';
import person1 from "../Images/person 1.jpg"
import logophoto from "../Images/logophoto.jpg"

const Lawyer = () => {
  const lawyers = [
    {
      id: 1,
      name: 'Advocate John Smith',
      expertise: 'Criminal Law, Family Law',
      contact: 'johnsmith@example.com',
      rating: '⭐⭐⭐⭐☆',
      image: 'advocate1.jpg'
    },
    {
      id: 2,
      name: 'Advocate Jane Doe',
      expertise: 'Corporate Law, Intellectual Property',
      contact: 'janedoe@example.com',
      rating: '⭐⭐⭐⭐⭐',
      image: 'advocate2.jpg'
    },
    {
      id: 3,
      name: 'Advocate Alex Brown',
      expertise: 'Environmental Law, Immigration Law',
      contact: 'alexbrown@example.com',
      rating: '⭐⭐⭐☆☆',
      image: 'advocate3.jpg'
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logophoto} alt='photo' style={{ height: '80px', width: 'auto' }}/>
            LegalConnect
          </a>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h2 className="text-center">Law and Advocate List</h2>
        <div className="row mt-4">
          {lawyers.map(lawyer => (
            <div className="col-md-4" key={lawyer.id}>
              <div className="card">
                <img src={person1} className="card-img-top" alt={lawyer.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{lawyer.name}</h5>
                  <p className="card-text">Expertise: {lawyer.expertise}</p>
                  <p>Contact: {lawyer.contact}</p>
                  <p>Rating: {lawyer.rating}</p>
                  <a href="#" className="btn btn-dark">Book Appointment</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center p-3 mt-5">
        <div className="container">
          <p>Contact us: <a href="mailto:support@legalconnect.com" className="text-light">support@legalconnect.com</a> | +1 (234) 567-890</p>
          <a href="#" className="text-light">Privacy Policy</a> | <a href="#" className="text-light">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Lawyer;
