import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // endereço no broser ex: /catalogo
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
