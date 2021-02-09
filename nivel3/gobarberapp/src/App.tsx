import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/globals';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <>
        <AuthProvider>
        <SignIn />
        </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
