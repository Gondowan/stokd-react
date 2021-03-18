import { connect } from 'react-redux';
import { Component } from 'react'


class Highlights extends Component{
  state = {
    total: 0,
    featured: {},
    attention: {}
  }
  
  componentDidMount(){
    this.getCount();
    this.getFeatured();
    this.getAttention();
  }
  
  getCount(){
    let count = 0;
    this.props.inventory.map(item =>{
      return count += item.content.quantity
    })
    return this.setState({total: count})
  }

  getFeatured(){
    let top = 0
      this.props.inventory.map(item =>{
        return item.content.quantity > top ? top = item.content.quantity : null
      })
    const featured = this.props.inventory.filter(item =>{
      return item.content.quantity >= top
    })
    return this.setState({featured: featured[0].content})
  }

  getAttention(){
    const array = []
      this.props.inventory.map(item =>{
        return array.push(item.content.quantity)
      })
    const attention = this.props.inventory.filter(item =>{
      return item.content.quantity === Math.min(...array)
    })
    return this.setState({attention: attention[0].content})
  }

  renderedCards(){
    const array = [
      {id: 1, title: 'Total Inventory Count', data: this.state.total, icon: "fas fa-boxes fa-3x brown-text"},
      {id: 2, title: 'Featured Product', data: `${this.state.featured.name}: ${this.state.featured.quantity}`, icon: "fas fa-star fa-3x yellow-text"},
      {id: 3, title: 'Needs Attention', data: `${this.state.attention.name}: ${this.state.attention.quantity}`, icon: "fas fa-exclamation fa-3x deep-orange-text lighten-2"}
    ]
      return array.map(elem =>{
        return(
          <div
            key={elem.id}
            className="highlight-card z-depth-2"      
          >
            <i className={elem.icon}></i>
            <div>
              <h5 className="highlight-card-title">{elem.title}</h5>
              <p>{elem.data}</p>
            </div>
          </div>
        )
      })
  }

  render(){
    return (
        <div className="highlight-container">
          {this.state.total === 0 ? 'Loading Data...' : this.renderedCards()}
        </div>
      
    )
  }
}

const mapStateToProps = (state) =>{
  return {inventory: state.inventory.inventory}
}

export default connect(mapStateToProps, null)(Highlights);