import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from './Card';


class Highlights extends Component {
  state = {
    true: false,
  }
  componentDidMount(){
    this.setState({data: this.props.inventory, true: true, info: this.info, count: this.count(), featured: this.getFeatured(), attention: this.getAttention() })
  }

  info =  [
    {id: 0, title: 'Total Inventory Count', icon: "fas fa-boxes fa-3x brown-text"},
    {id: 1, title: 'Featured Product', icon: "fas fa-star fa-3x yellow-text"},
    {id: 2, title: 'Low inventory', icon: "fas fa-exclamation fa-3x deep-orange-text lighten-2"}
  ]

  count(){
    let count = 0;
      this.props.inventory.forEach(item =>{
        count += item.content.quantity
      })
      return count
  }

  build(){
    return (
      this.state.info.map(item =>{
        return (
          <Card id={item.id} title={item.title} icon={item.icon} content={this.getData(item.id)}/>
        )
      })
    )
  }

  getFeatured(){
    let top = 0
    this.props.inventory.forEach(item =>{
      return item.content.quantity > top ? top = item.content.quantity : null
    })
    const item = this.props.inventory.filter(item =>{
      return item.content.quantity >= top
    })
    return item[0].content
  }

  getAttention(){
    const array = []
    
    this.props.inventory.map(item =>{
      return array.push(item.content.quantity)
    })
    const attention = this.props.inventory.filter(item =>{
      return item.content.quantity === Math.min(...array)
    })
    return attention[0].content
  }



  getData = (id) => {
    if(id === 0){
      return this.state.count
    }else if(id === 1){
      return this.state.featured.name
    }else{
      return `${this.state.attention.name}: ${this.state.attention.quantity}`
    }
  }


  load(){
    return <h1>Loading</h1>
  }

  render() {
    return (
      <div  className="highlight-container">
        {this.state.true ? this.build() : this.load()}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {inventory: state.inventory.inventory}
}

export default connect(mapStateToProps, {})(Highlights);