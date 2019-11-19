import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Headers /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
