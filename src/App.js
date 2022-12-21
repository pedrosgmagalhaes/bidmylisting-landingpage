import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = React.lazy(() => import('./pages/landingPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <LandingPage />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
