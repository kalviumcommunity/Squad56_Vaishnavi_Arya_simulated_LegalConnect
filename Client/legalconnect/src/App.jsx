import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'; 
import ConnectNow from './Pages/connectNow';
import Lawyer from './Pages/lawyer';
import LegalServices from './Pages/LegalServices'; 
import LegalAssistance from './Pages/legalassistance';
import LegalRepresentation from './Pages/LegalRepresentation';
import LawBooks from './Pages/LawBooks';
import BookAppointment from './Pages/Bookappointments'; 
import Law from './Pages/Law'; 
import Upgrade from './Pages/Upgrade'; 


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/connectnow" element={<ConnectNow />} />
          <Route path="/lawyers" element={<Lawyer />} />
          <Route path="/legalservices" element={<LegalServices />} />
          <Route path="/legalassistance" element = {<LegalAssistance/>}/>
          <Route path="/legalrepresentation" element = {<LegalRepresentation/>}/>
          <Route path="/lawbooks" element = {<LawBooks/>}/>
          <Route path="/law" element={<Law />} /> 
          <Route path="/bookappointment" element={<BookAppointment/>}/>
          <Route path="/upgrade" element={<Upgrade />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
