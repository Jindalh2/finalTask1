import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent';
import Home from './components/Home';
import Footer from './components/Footer';
//import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer'
import Blogs from './components/Blogs';
import Blogs2 from './components/Blogs2';
import Blogs3 from './components/Blogs3';
import Blogs4 from './components/Blogs4';
import Blogs5 from './components/Blogs5';
import Blogs6 from './components/Blogs6';
import Read2 from './components/Read2';
import Read from './components/Read';
import Read3 from './components/Read3';
import Watch from './components/Watch';
import Watch2 from './components/Watch2';
import Watch3 from './components/Watch3';

import './index.css'

import './App.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen : !prevState.sideDrawerOpen};
    });
  };


  backdropClickHandler = () => {
      this.setState({sideDrawerOpen:false});
  };

  render(){
    
    let backdrop;

  
  return (
    <div  style={{height: '100%'}} className="App">
    <Router>
      
       
    
    <Menu drawerClickHandler = {this.drawerToggleClickHandler}/>
   <SideDrawer show={this.state.sideDrawerOpen}/>
   {backdrop}
   

      
     
      
      <Route exact path = "/Python"  render={props => (
      <React.Fragment>
       <Blogs />
      </React.Fragment>
      )}  />
    


    <Route exact path = "/Machinel"  render={props => (
      <React.Fragment>
       <Blogs6/>
      </React.Fragment>
      )}  />
      <Route exact path = "/Javascript"  render={props => (
      <React.Fragment>
       <Blogs2 />
      </React.Fragment>
      )}  />
      <Route exact path = "/C++"  render={props => (
      <React.Fragment>
       <Blogs3 />
      </React.Fragment>
      )}  />
      <Route exact path = "/Frontend"  render={props => (
      <React.Fragment>
       <Blogs4 />
      </React.Fragment>
      )}  />
      <Route exact path = "/backend"  render={props => (
      <React.Fragment>
       <Blogs5 />
      </React.Fragment>
      )}  />
      <Route exact path = "/"  render={props => (
      <React.Fragment>
       <Home />
      </React.Fragment>
      )}  />

      <Route exact path = "/Read/oops"  render={props => (
      <React.Fragment>
       <Read2/>
      </React.Fragment>
      )}  />
       <Route exact path = "/Read/Loops"  render={props => (
      <React.Fragment>
       <Read3 />
      </React.Fragment>
      )}  />
      <Route exact path = "/Read/"  render={props => (
      <React.Fragment>
       <Read />
      </React.Fragment>
      )}  />
      <Route exact path = "/Watch"  render={props => (
      <React.Fragment>
       <Watch/>
      </React.Fragment>
      )}  />

      <Route exact path = "/watch/data"  render={props => (
      <React.Fragment>
       <Watch2/>
      </React.Fragment>
      )}  />
    

    <Route exact path = "/Watch/algo"  render={props => (
      <React.Fragment>
       <Watch3/>
      </React.Fragment>
      )}  />
      <Footer/>
    
    </Router>
    </div>
  );
}
}

export default App;
