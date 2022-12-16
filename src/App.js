import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage1 = React.lazy(() => import('./pages/landingPage1/'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage1 />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
