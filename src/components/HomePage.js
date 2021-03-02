import Slider from './Slider.js';
import HomeCard from './HomeCard.js';
import { Button, Icon, CardPanel } from 'react-materialize';
import { Link } from 'react-router-dom';
import HomepageTabs from './HomepageTabs.js';
import Pricing from './Pricing';
import FooterPage from './FooterPage';

const HomePage = () => {

    return (
        <div>
            <div className="home-title">
                <video autoPlay muted loop id="myVideo">
                    <source src="https://res.cloudinary.com/dliczkabg/video/upload/v1614708923/videos/production_ID_4281239_ftjn1g.mp4" type="video/mp4" />
                </video>
                <div className="heading">
                    <h1>Take control of your business</h1>
                    <h5>Visualize the way you manage inventory and ordering. </h5>
                    <Link to="/contact" className="btn btn-large home-title-btn deep-orange lighten-1 hoverable">
                        Learn more
                        <Icon right>
                        send
                        </Icon>
                    </Link>
                </div>
            </div>
        <div className="App">
            {/* <Slider/> */}
            <HomeCard/>
            <div className="home-card">
                <h1>Easy to access inventory dashboard</h1>
            <HomepageTabs/>
            </div>
            <div className="pricing-homepage">
                <h1>Pricing plans</h1>
            </div>
            <Pricing/>
            <FooterPage/>
        </div>
    </div>
    )
}

export default HomePage;