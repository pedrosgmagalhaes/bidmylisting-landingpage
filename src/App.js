import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage1 = React.lazy(() => import('./pages/landingPage1'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <LandingPage1 />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
