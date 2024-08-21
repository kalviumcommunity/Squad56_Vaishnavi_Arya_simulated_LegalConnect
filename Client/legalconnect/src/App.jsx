import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'; 
import Profile from './Pages/Profile';
// import ConnectNow from './Pages/ConnectNow'; // Ensure the correct path and casing
import ConnectNow from './Pages/connectNow';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/connectnow" element={<ConnectNow />} /> 
          <Route path="/profile" element={<Profile />} />
          {/* Use the correct component name */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
