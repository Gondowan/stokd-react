import { useState } from 'react';
import HomeDashboard from './HomeDashboard';
import Data from './Data';
import Reports from './Reports';
import Support from './Support';

const Content = (props) =>{
  console.log(props)
  const [component, setComponent] = useState('dashboard')

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
    <div className="dashboard-content">
      {displayComponent()}
    </div>
  )
}



export default Content;