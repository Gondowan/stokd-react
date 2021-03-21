import  { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchInventory } from '../../actions/index';
import { useEffect } from 'react';


const Data = (props) =>{    
    console.log(props)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchInventory(props.id))
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderHead = () =>{
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
    
    const renderBody = () =>{
        if(props.inventory){      
            return(      
            props.data.inventory.map(elem =>{
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
    return(
        <div className="table" >
        <table className="striped highlight centered">
            {renderHead()}
            <tbody>{renderBody()}</tbody>
        </table>
        </div>
    )
}
// const mapStateToProps = (state) =>{
    
    // return{
    //     fetchInventory: state.fetchInventory,
    //     companyId: state.auth.user.data.user.company_id,
    //     // inventory: state.inventory.inventory
    // }
// }

 export default connect()(Data);