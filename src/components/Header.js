import React, {Component} from 'react'
import logo from '../logo.svg';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      visibility : true
    }
  }
  render() {
    return (
      <header className = "App-header" id ="mainHeader">
        <h1>The Amazing company</h1>
        <img className = "App-logo" src = {logo} alt = "the amazing company logo"></img>          
        <h2>we can do anything!</h2> {/*parse header values from json file?*/} 
      </header>
    )
  }

}

export default Header