import React from 'react';
import {NavbarItem} from './component/Navbar'
// import {Home} from './component/Home'
import {Routerconfig} from './Router/Routerconfig'
import './App.css';
import {Transaction} from './Hook/Createcontext';

function App() {
  return (
    <div >
  <Transaction>
         <Routerconfig />
         
  </Transaction>
 

    </div>
  );
}

export default App;
