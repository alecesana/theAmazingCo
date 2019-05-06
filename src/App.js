import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/caseStudies';
import SideDrawer from './components/sideDrawer.js'
import Backdrop from './components/backdrop.js';


class App extends Component {
  state = {
    sideDrawerOpen : false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  sideDrawerElementClickHandler = () => {
    this.setState({ sideDrawerOpen: false})
    console.log("sidedrawerelementclick")
  }

  render() {   
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    } 
    return (
      <div className="App">  
        <Header/> 
        <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} elementClickHandler = {this.sideDrawerElementClickHandler}/>
        {backdrop}      
        <Mission/>
        <Services/>
        <CaseStudies/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
