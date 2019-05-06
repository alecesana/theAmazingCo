import React from 'react'

const backdrop = props => {
  return (
    <div className = "backdrop" onClick={props.click}/>
  )
}

export default backdrop