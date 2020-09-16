import React from 'react';
import './App.css';
import ProfilPhoto from './component/Profile/ProfilPhoto'
import FullName from './component/Profile/FullName'
import Address from './component/Profile/Address'

function App() {
  return (
    <div className="App">
     <ProfilPhoto />
     <FullName />
     <Address />
    </div>
  );
}

export default App;
