import React from 'react';
// import './legalrepresentation.css'; // Create a new CSS file for styling
import logophoto from "../Images/logophoto.jpg";

const LegalRepresentation = () => {
  const representation = [
    {
      id: 1,
      title: 'Right to Legal Representation',
      details: [
        'Constitutional Right: Under Article 22 of the Indian Constitution, every person who is arrested has the right to consult and be defended by a legal practitioner of their choice. This right is fundamental to ensuring a fair trial.',
        'Legal Aid: The Legal Services Authorities Act, 1987, establishes the right to free legal aid for those who cannot afford it. Legal services authorities at the national, state, and district levels provide free legal services to marginalized groups, including women, children, SC/ST communities, and those with a low income.'
      ]
    },
    {
      id: 2,
      title: 'Types of Legal Representation',
      details: [
        'Advocates: Licensed advocates represent clients in courts. They can practice in lower courts, High Courts, and the Supreme Court, depending on their experience and enrollment.',
        'Senior Advocates: Distinguished lawyers with significant experience and expertise may be designated as Senior Advocates by High Courts or the Supreme Court. They usually handle complex cases and provide specialized legal opinions.',
        'Government Lawyers: Public prosecutors, government pleaders, and other state-appointed lawyers represent the government in criminal cases, civil suits, and other legal matters.',
        'Legal Aid Counsel: Appointed by legal services authorities, these lawyers represent individuals who qualify for free legal services.'
      ]
    },
    {
      id: 3,
      title: 'Court System',
      details: [
        'Lower Courts: These include District Courts for civil and criminal cases. Advocates represent clients at this level.',
        'High Courts: Each state has a High Court where more complex and significant cases are heard. Lawyers need to have a certain level of experience to represent clients here.',
        'Supreme Court: The apex court in India, where only experienced advocates (often those with a Supreme Court practice certificate) can represent clients.'
      ]
    },
    {
      id: 4,
      title: 'Legal Representation in Criminal Cases',
      details: [
        'In criminal cases, the accused has the right to be represented by a lawyer. If they cannot afford one, the court is obliged to provide a legal aid lawyer.',
        'The public prosecutor represents the state and prosecutes the accused on behalf of society.'
      ]
    },
    {
      id: 5,
      title: 'Legal Representation in Civil Cases',
      details: [
        'In civil disputes, parties can hire advocates to represent them in various matters such as property disputes, family law issues, contracts, and torts.',
        'Mediation and arbitration are also alternative dispute resolution mechanisms where legal representation can be crucial.'
      ]
    },
    {
      id: 6,
      title: 'Challenges and Reforms',
      details: [
        'Access to Legal Aid: While legal aid is available, awareness and quality of representation remain challenges, particularly in rural and remote areas.',
        'Judicial Overload: Courts in India are often overloaded with cases, which can delay justice. Legal representation is crucial in navigating these delays and ensuring timely resolution.'
      ]
    },
    {
      id: 7,
      title: 'Recent Developments',
      details: [
        'The government and judiciary have been working on reforms to improve access to justice, including digitization of court processes, legal education reforms, and enhancing the quality of legal aid services.'
      ]
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logophoto} alt='logo' style={{ height: '80px', width: 'auto' }}/>
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
