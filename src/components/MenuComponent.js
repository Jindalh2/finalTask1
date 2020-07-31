import React from 'react';
import './Menu.css';
import DrawerToggleButton from './DrawerToggleButton.js';
import { useHistory } from "react-router-dom";
import {
  
  Navbar,
  NavbarBrand,
  NavItem,
 
  
} from 'reactstrap';

const Menu = (props) => {
 

  let history = useHistory();

  
  return (
    <div >
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><h2 className="text-danger">Technology Stack</h2>
        <p>Where Future Is Created</p><NavItem>
        <a onClick={() => history.goBack()} >Back</a></NavItem></NavbarBrand>
         <div className="spacer"/>
         
     <DrawerToggleButton click={props.drawerClickHandler}/>

   
     </Navbar>
    </div>
  )

}
export default Menu;