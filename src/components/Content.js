import { useState } from 'react';
import HomeDashboard from './HomeDashboard';
import Data from './Data';

const Content = () =>{
  const [component, setComponent] = useState('dashboard')

  const displayComponent = ()=>{
    if(component === 'dashboard'){
      return <HomeDashboard />
    }else if(component === 'data'){
      return <Data />
    }else{
      return "I'm working!"
    }
  }
  return(
    <div className="dashboard-content">
      {displayComponent()}
    </div>
  )
}

export default Content;