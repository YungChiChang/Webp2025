//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import logo from './logo.svg';
import './App.css';
import CGU_Login from './cgu_login'
import './index.css';
import HelloCGU from './cgu_hello';

function App() {
  return (
    <div className="APP">
      <div>
        { CGU_Login() }
      </div>
    </div>
  );
}


export default App;
