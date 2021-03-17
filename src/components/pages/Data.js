import { Component } from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInventory } from '../../actions/index';


class Data extends Component{    
    componentDidMount(){
        this.props.fetchInventory(this.props.companyId)
        
    }

    renderHead(){
        return(
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
        )
    }
    
    renderBody(){
        if(this.props.inventory){      
            return(      
            this.props.inventory.map(elem =>{
                return(
                    <tr key={elem.content.id}>
                        <td>
                            {elem.content.name}
                        </td>
                        <td className="sku">
                            {elem.content.sku}
                        </td>
                        <td>
                            {elem.content.price}
                        </td>
                        <td>
                            <input id={elem.content.id} type="number" className="quantity-input" defaultValue={elem.content.quantity}/>
                        </td>
                        <td>
                            {elem.content.category}
                        </td>
                        <td>
                            <Link to={`/products/${elem.content.id}`}>See details <i className="far fa-paper-plane"></i></Link>
                        </td>
                    </tr>
                )
            }))
        }
    }

    render(){
        return(
            <div className="table" >
            <table className="striped highlight centered">
                {this.renderHead()}
                <tbody>{this.renderBody()}</tbody>
            </table>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    
    return{
        fetchInventory: state.fetchInventory,
        companyId: state.auth.user.data.user.company_id,
        inventory: state.inventory.inventory
    }
}

 export default connect(mapStateToProps, {fetchInventory})(Data);