import React, {Component} from 'react'

  class Service extends Component {
    constructor(props) {
      super(props);
      this.state  = {
        visibility : true
      }
    }
    render() {
      return (
        <div className = "service">
            <h3>{this.props.title}</h3>
            <img src = {this.props.image} alt= "imageAS"></img>
            <p>{this.props.description}</p>
        </div>
      )
    }
  }

  export default Service
