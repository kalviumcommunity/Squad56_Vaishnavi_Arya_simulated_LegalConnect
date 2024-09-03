import React from 'react';
import './legalservices.css'; // You can reuse the same CSS file
import logophoto from "../Images/logophoto.jpg"

const LegalAssistance = () => {
  const assistance = [
    {
      id: 1,
      title: 'Legal Aid Services',
      details: [
        'The Constitution of India guarantees the right to legal aid under Article 39A, which mandates the state to provide free legal aid to the poor and weaker sections of society.',
        'The Legal Services Authorities Act, 1987, established the National Legal Services Authority (NALSA) to oversee and implement legal aid services across the country.'
      ]
    },
    {
      id: 2,
      title: 'Eligibility for Legal Aid',
      details: [
        'Legal aid is available to marginalized groups such as Scheduled Castes (SC), Scheduled Tribes (ST), women, children, people with disabilities, victims of human trafficking, and those in custody.',
        'Individuals whose annual income is below a specified threshold, as determined by state governments, are also eligible for free legal aid.'
      ]
    },
    {
      id: 3,
      title: 'Legal Aid Clinics',
      details: [
        'Legal aid clinics are set up in various locations, including law colleges, village panchayats, and prisons. These clinics provide legal advice, counseling, and sometimes representation in courts.'
      ]
    },
    {
      id: 4,
      title: 'Free Legal Aid Lawyers',
      details: [
        'NALSA and State Legal Services Authorities (SLSAs) appoint panel lawyers who provide free legal services to eligible individuals. These lawyers represent clients in various legal matters, including civil, criminal, and family law cases.'
      ]
    },
    {
      id: 5,
      title: 'Lok Adalats',
      details: [
        'Lok Adalats, or People\'s Courts, are an alternative dispute resolution mechanism where disputes are settled amicably. They are organized by legal services authorities and are a significant part of providing quick and affordable justice, particularly for minor cases.'
      ]
    },
    {
      id: 6,
      title: 'Awareness and Outreach Programs',
      details: [
        'Legal services authorities conduct legal literacy camps, awareness programs, and outreach initiatives to educate people about their rights and the availability of legal aid services.'
      ]
    },
    {
      id: 7,
      title: 'Challenges',
      details: [
        'Despite the framework, challenges remain, such as lack of awareness among the public, inadequate funding, and sometimes the quality of representation provided by legal aid lawyers. Efforts are ongoing to address these issues and improve the effectiveness of legal aid in India.'
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
        <h2 className="text-center">Legal Assistance in India</h2>
        <div className="row mt-4">
          {assistance.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card01">
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  <ul>
                    {item.details.map((detail, index) => (
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

export default LegalAssistance;
