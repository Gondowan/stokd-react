import { Button, Icon, CardPanel } from 'react-materialize';
import { Link } from 'react-router-dom';

const Pricing = () => {
    
    return (
    <div className="pricing-container">
        <div className="pricing-card z-depth-1">
         <div className="pricing-header">
            <h3>Basic</h3>
         </div>   
            <h2>Free</h2>
            <ul>
                <li>300 products</li>
                <li>5 locations</li>
                <li>Up to 3 days contact support</li>
            </ul>
        </div>
        <div className="pricing-card z-depth-1">
            <div className="pricing-header">
                <h3>Premium</h3>
            </div>
            <h2>9,99€</h2>
            <ul>
                <li>1.000 products</li>
                <li>20 locations</li>
                <li>Support assist in the same day</li>
            </ul>
        </div>
        <div className="pricing-card z-depth-1">
            <div className="pricing-header">
                <h3>Advanced</h3>
            </div>
            <h2>19,99€</h2>
            <ul>
                <li>Unlimited products</li>
                <li>50 locations</li>
                <li>24/7 Dedicated Support</li>
            </ul>
        </div>
            <Link className="btn btn-large home-title-btn deep-orange lighten-1 hoverable"
                        node="a"
                        to='/contact'
                        waves="light"
                    >
                        Learn More
                        <Icon right>
                        perm_phone_msg
                        </Icon>
            </Link>
    </div>

)

}

export default Pricing;