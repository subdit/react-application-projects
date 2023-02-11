import './App.css';
// import { Header } from './components/Header';
import { Footer } from './components/Footer';
import React from 'react';
import { useState } from 'react';

function App() {
  const myName = 'Counter App';
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      {/* <Header /> */}
      <div className='App'>
        <h2 className='sub-header'>Hello..! {myName}</h2>
        <p className='p-tag'>This is going to be a fun project.</p>

        <div className='box'>
          <p>{count}</p>
          <button onClick={handleCount} className='add'>
            ADD
          </button>
          <button onClick={() => handleSub()} className='sub'>
            SUB
          </button>
          <button onClick={handleReset} className='reset'>
            Reset
          </button>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
