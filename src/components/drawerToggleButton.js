import React from 'react'

const drawerToggleButton = props => (
  <button className="toggle-button" onClick = {props.click}>
    <div className="toggle-button__line tbl_t" />
    <div className="toggle-button__line tbl_m" />
    <div className="toggle-button__line tbl_b" />
  </button>
)

export default drawerToggleButton