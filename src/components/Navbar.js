import React, {Component} from 'react'
import navElementsList from "../inputData/navElementsList"
import DrawerToggleButton from './drawerToggleButton'
import logo from '../logo.svg';


  class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state  = {
        visibility : true
      }
    }
    render() {
      const navElements  = navElementsList.map((el, index) => <NavElement key = {index} element = {el.text} anchor ={ "#"+ el.text}/>)
    
      return (        
        <nav className = "navbarContainer">                
                <div className = "navLogo"><a href = "#mainHeader"><img className = "nav-logo" src = {logo} alt = "the amazing company logo"></img></a></div> 
                <div className = "spacer"></div>
                <div className = "toggle-button-container">
                  <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                <div className = "navElementsContainer">  
                  <ul className="navbar">
                   {navElements}
                  </ul>
                </div>  
        </nav>      
      )
    }
  }

  class NavElement extends Component {

    render() {  
  
      return (        
        <li className = "navElement" >
          <a href = {this.props.anchor} >
            <h2>{this.props.element}</h2>
          </a>
        </li>            
      )
    }
  }

  export default Navbar


