import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'; 
import ConnectNow from './Pages/connectNow';
import Lawyer from './Pages/lawyer'; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/connectnow" element={<ConnectNow />} />
          <Route path="/lawyers" element={<Lawyer />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
