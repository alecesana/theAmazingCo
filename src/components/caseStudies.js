import React, {Component} from 'react'
import cases from "../inputData/casesList"


  class CaseStudies extends Component {
    constructor(props) {
      super(props);
      this.state  = {
        visibility : true
      }
    }    
    render() {
      const caseStudiesList = cases.map((c, index) => <Case key={index} title={c.title} text = {c.text} image = {c.image}/>)
       return (
        <div className = "caseStudies" id = "Case Studies">
                  <h1>Some case studies</h1>
          {caseStudiesList}   
        </div>
      )
    }
  }  

  class Case extends Component {
 
    
    render() {
       return (
        <div className = "caseContainer">
          <div className = "case" >
            <div className = "caseImageContainer">
              <img src = {this.props.image} alt = {this.props.imageDescription}></img>
            </div>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>           
          </div>
          
        </div>
      )
    }
  }
  export default CaseStudies

