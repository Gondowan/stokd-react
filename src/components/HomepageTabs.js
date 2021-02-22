import HomepageGrid from './HomepageGrid.js';
import {Tabs, Tab} from 'react-materialize';


const HomepageTabs = () => {
   return (
       
       <div className="z-depth-3">
        <Tabs className="tab-demo z-depth-3 tabs-fixed-width">
            <Tab
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
            options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
            }}
            title="Charts"
            >
                <img src="https://res.cloudinary.com/dliczkabg/image/upload/v1614015434/stokd-icons/sunburst_y4pror.gif" style={{width: '100%'}}/>
            </Tab>
        </Tabs>
        </div>
   )

}

export default HomepageTabs;