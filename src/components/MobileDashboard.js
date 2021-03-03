import { Tabs, Tab } from 'react-materialize';
import Data from './Data';
import Highlights  from './Highlights';
import Graphs from './Graphs';
import Support from './Support';



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
            title="Dashboard"
          >
            <div className="small-dashboard">
              <Highlights />
              <img src="https://res.cloudinary.com/dliczkabg/image/upload/v1614785611/01_graph_dashboard_wbw8xf.png" className="mobile-graph" alt="graph"/>
            </div>
          </Tab>
          <Tab
            options={{
                duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: true
            }}
            title="Products"
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
              title="Reports"
            >
                again
            </Tab>
            <Tab
              options={{
                  duration: 300,
                  onShow: null,
                  responsiveThreshold: Infinity,
                  swipeable: true
              }}
              title="Support"
            >
              <Support />
            </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default MobileDashboard;