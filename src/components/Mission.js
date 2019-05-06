import React, {Component} from 'react'
import mission from '../inputData/missionParagraph'

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      visibility : true
    }
  }
  render() {
    const missionText = mission.map((mission,index) =>  <p key = {index}>  {mission.text}</p>)
    return (
      <div className = "mission" id="Mission">
        <h2>Our mission</h2> 
        {missionText}     
      </div>
    )
  }
}

export default Mission