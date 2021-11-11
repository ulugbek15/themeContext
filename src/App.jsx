import './App.css';

import { useState, useContext } from 'react';



//Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <h1>Main</h1>
    </main>
    <Footer/>
    </>
    );
  }
  
  export default App;
  