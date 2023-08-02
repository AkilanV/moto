import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Location from './pages/Location';
import Dashboard from './pages/Dashboard';
import Choosepart from './pages/Choosepart';
import Header from './pages/common/Header';
import LeftSidebar from './pages/common/LeftSidebar';
import Footer from './pages/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


 

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    // <Route path='/' element={<Login/>}></Route>
    // </Routes>
    // </BrowserRouter>
    
    <BrowserRouter>
    <Routes>
          <Route exact path='/' element={<Login/>}></Route>
    </Routes>
    {/* <Header /> */}
        {/* <LeftSidebar /> */}
          <Routes>
        
              {/* <Route path='/' element={<Login/>}></Route> */}
              {/* <Route path='/' element={<Dashboard/>}></Route> */}
              <Route path='/Location' element={<Location/>}></Route>
              <Route path='/Choosepart' element={<Choosepart/>}></Route>
              <Route path='/Dashboard' element={<Dashboard/>}></Route>

          </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
