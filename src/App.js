import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Headers /> */}
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
