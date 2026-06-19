import React from 'react';
import { HashRouter, Route,Routes,Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import App from './App';
import Home from './Home';

const Nav = () => {
  return (

    <>
      <HashRouter>
        
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>






        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element={<About/>}  />
            <Route path="/contact" element={<Contact/>} />
        </Routes>

      </HashRouter>
      
    </>

  )
}

export default Nav
