import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [mail, setMail] = useState([
    'test@test.com',
    'Rayane.prolyfe@gmail.com',
    'Marie.andon@gmail.com',
  ]);

  useEffect(() => {
    fetch('/mails')
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
      <h1>Pannel Admin | BootCode</h1>
      <header className="App-header">
       {mail.map(email => <p>{email}</p>)}
      </header>
    </div>
  );
}

export default App;
