import React from 'react';
import book1 from "../Images/book1.jpg";
import book2 from "../Images/indianlaw2.jpg";
import book3 from "../Images/indianlaw3.webp";
import book4 from "../Images/book4.jpg";  // Add images for new books
import book5 from "../Images/book5.jpg";
import book6 from "../Images/book6.jpg";
import logophoto from "../Images/logophoto.jpg";

const LawBooks = () => {
  const books = [
    {
      id: 1,
      title: 'Constitution of India',
      author: 'Dr. B. R. Ambedkar',
      description: 'The Constitution of India is the supreme law of India. It lays down the framework that defines fundamental political principles, establishes the structure, procedures, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.',
      image: book1
    },
    {
      id: 2,
      title: 'Law of Contracts in India',
      author: 'Avtar Singh',
      description: 'A comprehensive book on Contract Law in India, which is an essential subject for students, practitioners, and professionals. It covers key aspects of contracts including performance, breach, and remedies.',
      image: book2,
    },
    {
      id: 3,
      title: 'Indian Penal Code (IPC)',
      author: 'Ratanlal & Dhirajlal',
      description: 'The Indian Penal Code (IPC) is the primary penal code of India, which outlines various offenses and provides the punishments for them. This book is a must-have for anyone studying or practicing criminal law in India.',
      image: book3,
    },
    {
      id: 4,
      title: 'Introduction to the Constitution of India',
      author: 'Durga Das Basu',
      description: 'This book provides an in-depth understanding of the Constitution of India, explaining its background, interpretation, and legal principles. A must-read for students and professionals of constitutional law.',
      image: book4,
    },
    {
      id: 5,
      title: 'Principles of Criminal Law',
      author: 'Andrew Ashworth',
      description: 'This book covers the fundamentals of criminal law and helps students understand criminal responsibility and the framework of offenses. Suitable for both Indian and international readers.',
      image: book5,
    },
    {
      id: 6,
      title: 'Administrative Law',
      author: 'I. P. Massey',
      description: 'This book provides a clear explanation of administrative law in India, with examples and interpretations of legal principles concerning the functioning of government and public authorities.',
      image: book6,
    }
  ];

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
        <h2 className="text-center">Indian Law Books</h2>
        <div className="row mt-4">
          {books.map(book => (
            <div className="col-md-4" key={book.id}>
              <div className="card mb-4">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <p>{book.description}</p>
                  <a href="#" className="btn btn-dark">Read More</a>
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

export default LawBooks;
