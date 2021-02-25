import HomepageGrid from './HomepageGrid.js';
import {Tabs, Tab} from 'react-materialize';


const HomepageTabs = () => {
   return (
       
       <div className="z-depth-3 tab-container">
        <Tabs className="tab-demo z-depth-3 tabs-fixed-width " >
            <Tab
            className="s6"
            active
            options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
            }}
            title="Inventory"
            >
            <HomepageGrid/>
            </Tab>
            <Tab
            className="s6"
            options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
            }}
            title="Charts"
            >
                <img src="https://res.cloudinary.com/dliczkabg/image/upload/v1614015434/stokd-icons/sunburst_y4pror.gif" className="graph" alt="graph"/>
            </Tab>
        </Tabs>
        </div>
   )

}

export default HomepageTabs;