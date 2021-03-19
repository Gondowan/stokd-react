import React from 'react'

const Card = (props) =>{
  return (
    <div
      key={props.id}
      className="highlight-card z-depth-2"      
    >
      <i className={props.icon}></i>
      <div>
        <h5 className="highlight-card-title">{props.title}</h5>
        <h5>{props.content}</h5>
      </div>
    </div>
  )
}

export default Card
