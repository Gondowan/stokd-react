
import Graphs from './Graphs';
import Tasks from './Tasks';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import Card from './Card';

const HomeDashboard = (props)=>{
  const [count, setCount] = useState(0);

  useEffect(()=>{
    let count = 0;
    props.inventory.forEach(item =>{
      count += item.content.quantity
    })
    setCount(count)
  }, [setCount, props.inventory])



  const info =  [
    {id: 1, title: 'Total inventory count', icon: "fas fa-boxes fa-3x brown-text"},
    {id: 2, title: 'Featured Item', icon: "fas fa-star fa-3x yellow-text"},
    {id: 3, title: 'Low inventory', icon: "fas fa-exclamation fa-3x deep-orange-text lighten-2"}
  ]

  const renderCard = info.map(card => {
    return <Card id={card.id} title={card.title} icon={card.icon} />
  })

  return(
    <div className="home-dashboard-container">
        <div className="highlight-container">
          {renderCard}
        </div>
        <Graphs data={props.inventory}/>
        <Tasks />
    </div>
  )
}
const mapStateToProps = (state) =>{
  return {inventory: state.inventory.inventory}
}

export default connect(mapStateToProps,{})(HomeDashboard);