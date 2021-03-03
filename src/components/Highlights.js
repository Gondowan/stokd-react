import { Card } from 'react-materialize';
import { useState } from 'react'

const Highlights = () =>{
  const [highlight, setHighlights] = useState([
    {id: 1, title: 'Total Inventory', data: "798 products"},
    {id: 2, title: 'Featured Product', data: 'Black t-shirt'},
    {id: 3, title: 'Needs attention', data: 'Red Cowboy boots'}
  ])
  const renderedCards = highlight.map(elem =>{
    return(
      <div
      key={elem.id}
      className="highlight-card"      
    >
      <i className="fas fa-boxes fa-3x"></i>
      <div>
        <h5 className="highlight-card-title">{elem.title}</h5>
        <p>{elem.data}</p>
      </div>
    </div>
    )
  })
  return (
      <div className="highlight-container">
        {renderedCards}
      </div>
    
  )
}

export default Highlights;