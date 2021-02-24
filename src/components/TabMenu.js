import { Tab, Tabs } from 'react-materialize';
import Data from './Data'
import Slider from './Slider'

const TabMenu = () =>{
  return(
      <div>
        <Tabs className="tab-menu tabs-fixed-width z-depth-1">
          <Tab
          className="tab-content"
          active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: true
            }}
            title="Dashboard"
          >
            <div className="dashboard-container">
              one
            </div>
          </Tab>
          <Tab
            className="tab-content"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: true
            }}
            title="Products"
          >
            <Slider />
          </Tab>
          <Tab
            className="tab-content"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: true
            }}
            title="Data"
          >
            <Data />
          </Tab>
          <Tab
            className="tab-content"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: true
            }}
            title="Test 4"
          >
            Test 4
          </Tab>
        </Tabs>
      </div>
  )
}

export default TabMenu;