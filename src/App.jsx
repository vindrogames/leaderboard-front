import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/PageHeader';
import LeaderBoard from './components/LeaderBoard';
import Footer from './components/Footer';

import './scss/main.scss';

function App() {
  
  return (

    <>
      <Header />
      <LeaderBoard />
      <Footer />
    </>
  );
};

export default App;
