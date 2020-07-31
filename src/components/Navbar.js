import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import Read from './Read';
import Read2 from './Read2';


const NavbarNew = (props) => {
  return (
    <div >
      
   <div className="navbar">
  <a href="./Watch">WATCH</a>
  <a href="#">LISTEN</a>
  <a href="./Read">READ</a>
  <a href="#">SOLVE</a>
  </div></div>
  )

}
export default NavbarNew;