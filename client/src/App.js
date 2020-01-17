import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [ message, setMessage ] = useState('')

  const fetchMessage = async () => {
    try {
      const message = await fetch('./express-backend');
      console.log(message);
      setMessage(message);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
    <button
    className="basic-button"
    onClick={() => fetchMessage()}
    >
      Say hello
    </button>
  {message && <div>{message}</div>}
    </>
  );

};

export default App;
