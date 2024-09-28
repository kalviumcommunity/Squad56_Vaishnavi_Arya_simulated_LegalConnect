import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios
import logophoto from "../Images/logophoto.jpg";

const LegalRepresentation = () => {
  const [representation, setRepresentation] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchRepresentationData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/legalrepresentation");  // Adjust the API endpoint if needed
        setRepresentation(res.data);  // Set the data in the state
      } catch (error) {
        console.error("Error fetching legal representation data:", error);
      }
    };

    fetchRepresentationData();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logophoto} alt='logo' style={{ height: '80px', width: 'auto' }} />
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
        <h2 className="text-center">Legal Representation</h2>
        <div className="row mt-4">
          {representation.map(rep => (
            <div className="col-md-6 mb-4" key={rep.id}>
              <div className="card01">
                <div className="card-body">
                  <h5 className="card-title text-center">{rep.title}</h5>
                  <ul>
                    {rep.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
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

export default LegalRepresentation;
