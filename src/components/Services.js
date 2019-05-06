import React, {Component} from 'react'
import services from "../inputData/servicesList"
import Service from "./Service"

  class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state  = {
        visibility : true
      }
    }
    
    render() {
      const servicesList = services.map((service, index) => <Service key={index} title={service.title} description = {service.description} image = {service.image}/>)
      
      return (
        <div className = "services" id = "Services">
          <h2>Our services</h2>  
          {servicesList}   
        </div>
      )
    }
  }

  export default Navbar

