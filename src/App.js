import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage1 from './pages/landingPage1/';

function App() {
  return (
    <BrowserRouter>
      <LandingPage1 />
    </BrowserRouter>
  );
}

export default App;