import React, { Component } from 'react';
import navElementsList from "../inputData/navElementsList"


const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  const navElements  = navElementsList.map((el, index) => <NavElement key = {index} element = {el.text} anchor ={ "#"+ el.text} click = {props.elementClickHandler} />)

  return (
    <nav className={drawerClasses} onClick = {props.click}>
     <ul className="navbar_side-drawer">
                   {navElements}
    </ul>
    </nav>
  )
}

class NavElement extends Component {

  render() {  

    return (        
      <li className = "navElement" >
        <a href = {this.props.anchor} onClick = {this.props.click} >
          <h2>{this.props.element}</h2>
        </a>
      </li>            
    )
  }
}

export default sideDrawer