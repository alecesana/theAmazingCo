import React, {Component} from 'react'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      visibility : true
    }
  }
  render() {
    return (
      <footer className = "footer">
        <div className = "footerElementsContainer">
          <h4>The Amazing Company</h4> 
          <h5> {String.fromCharCode(169) + " "} Alessandro Cesana 2019</h5> 
          <h5><a href = "https://alecesana.github.io">alecesana.github.io</a></h5>      
        </div>     
      </footer>
    )
  }

}

export default Footer