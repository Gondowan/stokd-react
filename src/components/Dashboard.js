
import SideMenu from './SideMenu';
import HomeDashboard from './HomeDashboard';
import Data from './Data';
import Reports from './Reports';
import Support from './Support';

import { useState } from 'react';


const Dashboard = (props) =>{
  const [component, setContent] = useState('data')

  const displayComponent = ()=>{
    if(component === 'dashboard'){
      return <HomeDashboard />
    }else if(component === 'data'){
      return <Data />
    }else if(component === 'reports'){
      return <Reports />
    }else{
      return <Support />
    }
  }
  return(
    <div className="dashboard-wrapper">
      <SideMenu />
      <div className="dashboard-content">
        {displayComponent()}
      </div>
    </div>
  )
}

export default Dashboard;