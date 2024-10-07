import React from 'react';
import './legalservices.css'; 
import logophoto from "../Images/logophoto.jpg";
import { Link } from 'react-router-dom';

const LegalServices = () => {
  const services = [
    {
      id: 1,
      title: 'Litigation Services',
      details: [
        'Civil Litigation: Legal professionals represent clients in civil disputes, such as property disputes, contract breaches, family law matters, and consumer protection cases.',
        'Criminal Litigation: Lawyers represent individuals accused of crimes, defending their rights in criminal courts. This includes cases ranging from minor offenses to serious crimes.',
        'Corporate Litigation: Involves legal disputes related to businesses, including issues like mergers, acquisitions, shareholder disputes, and intellectual property rights.'
      ]
    },
    {
      id: 2,
      title: 'Dispute Resolution',
      details: [
        'Arbitration and Mediation: Many legal professionals in India are trained to handle alternative dispute resolution (ADR) methods like arbitration and mediation, which offer a faster and often more cost-effective way to resolve disputes without going to court.',
        'Conciliation: This is another ADR method where a neutral third party helps the disputing parties reach a settlement.'
      ]
    },
    {
      id: 3,
      title: 'Legal Consultancy and Advisory Services',
      details: [
        'Corporate Legal Services: Lawyers provide advice on matters related to corporate governance, compliance, mergers and acquisitions, intellectual property, and more.',
        'Taxation and Regulatory Advice: Legal professionals help businesses navigate India\'s complex tax system and ensure compliance with various regulatory requirements.',
        'Personal Legal Advice: Individuals may seek legal advice on matters like estate planning, wills, family law, and property issues.'
      ]
    },
    {
      id: 4,
      title: 'Documentation and Drafting',
      details: [
        'Contracts and Agreements: Lawyers draft, review, and negotiate contracts and agreements for individuals and businesses, ensuring that they are legally sound.',
        'Legal Notices: Legal professionals prepare and send legal notices on behalf of clients to assert rights or demand remedies.',
        'Wills and Trusts: Lawyers assist in drafting wills, trusts, and other legal documents related to estate planning.'
      ]
    },
    {
      id: 5,
      title: 'Public Interest Litigation (PIL)',
      details: [
        'In India, public interest litigation allows individuals or groups to file cases in the interest of the public or a specific community, often addressing issues like environmental protection, human rights, and social justice.'
      ]
    },
    {
      id: 6,
      title: 'Legal Aid Services',
      details: [
        'Free Legal Aid: Under the Legal Services Authorities Act, 1987, free legal aid is provided to certain categories of people, including the poor, women, children, and members of Scheduled Castes and Scheduled Tribes. This ensures that access to justice is available to all, regardless of financial status.'
      ]
    },
    {
      id: 7,
      title: 'Legal Process Outsourcing (LPO)',
      details: [
        'India is a significant hub for legal process outsourcing, where legal work such as research, document review, and drafting is outsourced to Indian law firms and legal professionals by companies and law firms from other countries.'
      ]
    },
    {
      id: 8,
      title: 'Legal Education and Research',
      details: [
        'India has a robust system of legal education, with numerous law schools offering undergraduate and postgraduate courses. Many legal professionals also engage in legal research and writing, contributing to the development of law and policy in the country.'
      ]
    },
    {
      id: 9,
      title: 'Regulation of Legal Services',
      details: [
        'The Bar Council of India (BCI) is the regulatory authority overseeing the legal profession in India. It sets standards for legal education, regulates legal practice, and disciplines lawyers for professional misconduct.'
      ]
    },
    {
      id: 10,
      title: 'Technological Integration',
      details: [
        'Legal services in India are increasingly integrating technology, with the adoption of legal tech solutions like online dispute resolution platforms, digital documentation, and AI-based legal research tools.'
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
            <li className="nav-item">
            <Link to="/" className="nav-link text-light">Home</Link></li>
            <li className="nav-item">
            <Link to="/aboutus" className="nav-link text-light">About</Link></li>
            <li className="nav-item">
            <Link to="/service" className="nav-link text-light">Services</Link></li>
            <li className="nav-item">
            <Link to="/contactus" className="nav-link text-light">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h2 className="text-center">Legal Services</h2>
        <div className="row mt-4">
          {services.map(service => (
            <div className="col-md-6 mb-4" key={service.id}>
              <div className="card01">
                <div className="card-body">
                  <h5 className="card-title text-center">{service.title}</h5>
                  <ul>
                    {service.details.map((detail, index) => (
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

export default LegalServices;
