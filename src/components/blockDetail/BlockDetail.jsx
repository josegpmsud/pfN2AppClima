import React from 'react'
import './BlockDetail.css'

function BlockDetail(props) {
  return (
    <div className="cont">
        <h5>{props.day}</h5>
        <div className="contImg">
          <h5>{props.description}</h5>
        </div>
        <h5> {props.tepMax}</h5>
        <h5> {props.tepMin}</h5>
      </div>
  )
}

export default BlockDetail