import { Component } from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';


class Data extends Component{    
    state = {
        products: []
    }
    componentDidMount(){
        axios.get('https://stokd-backend-app.herokuapp.com/api/v1/companies/1/products').then(response => this.setState({products: response.data}))
    }
    
    
    
    render(){
        const renderedProducts = this.state.products.map(elem =>{
            return(
                <tr key={elem.id}>
                    <td>
                        {elem.name}
                    </td>
                    <td className="sku">
                        {elem.sku}
                    </td>
                    <td>
                        {elem.price}
                    </td>
                    <td>
                        <input id={elem.id} type="number" className="quantity-input" defaultValue={elem.quantity}/>
                    </td>
                    <td>
                        {elem.category}
                    </td>
                    <td>
                        <Link to="#">See details <i className="far fa-paper-plane"></i></Link>
                    </td>
                </tr>
            )
        })
        
    return(
        <div className="table">
        <table className="striped highlight centered">
            <thead>
                <tr>
                    <th data-field="id">
                    Name
                    </th>
                    <th data-field="sku" className="sku">
                    SKU
                    </th> 
                    <th data-field="price">
                    Price
                    </th>
                    <th data-field="quantity">
                    Quantity
                    </th>
                    <th data-field="category">
                    category
                    </th>  
                    
                     
                </tr>
            </thead>  
            <tbody>
                {renderedProducts}
            </tbody>
        </table>
        </div>
    )
    }
}
 export default Data;