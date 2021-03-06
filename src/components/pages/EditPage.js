import React, { Component } from 'react'
import axios from 'axios';
import SideMenu from '../subcomponents/SideMenu';

class EditPage extends Component {
  state = {
    product: {}
  }

  componentDidMount(){
    axios.get(`https://stokd-backend-app.herokuapp.com/api/v1/companies/4/products/365`).then(response => this.setState({product: response.data}))

  }

  renderProduct(){
    return Object.entries(this.state.product).map(item =>{
      if(item[0] === 'quantity'){
        return (
          <div key={item.id}>
            <label>{item[0]}</label>
            <input defaultValue={item[1]} type="number" />
          </div>
        )
      }
      if(item[0] === 'id'){
        return null
      }
      if(item[0] === 'features'){
        return(
          <div key={item.id}>
            <label>{item[0]}</label>
              {Object.entries(item[1]).map(item =>{
                return(
                  <div className="attributes-box" key={item.id}>
                    <input className="s4" defaultValue={item[0]}/>
                    <input className="s4" defaultValue={item[1]}></input>
                  </div>
                )
              })}
  
          </div>
        )
      }
        return(
          <div key={item.id}>
            <label>{item[0]}</label>
            <input defaultValue={item[1]}/>
          </div>
        )
      }
     
    )
  }
  render() {
    console.log(this.state.product)
    return (
      <div className="dashboard-wrapper">
        <SideMenu />
        <div className="dashboard-content App">
          <form>
            {this.renderProduct()}
            <button className="btn btn-large waves-effect waves-light deep-orange lighten-1" type="submit" name="action">Update
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditPage;