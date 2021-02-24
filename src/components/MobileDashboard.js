import { Tabs, Tab } from 'react-materialize';
import Data from './Data';


const MobileDashboard = () =>{

  return(
    <div className="mobile-dashboard">
      <div className="z-depth-3 tab-container">
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
                <Data />
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
              <img src="https://res.cloudinary.com/dliczkabg/image/upload/v1614015434/stokd-icons/sunburst_y4pror.gif" className="graph" alt="graph"/>
            </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default MobileDashboard;