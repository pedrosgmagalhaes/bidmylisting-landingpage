import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage1';
import LoadingSpinner from './components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage1 = React.lazy(() => LandingPage);

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
