import SideMenu from '../subcomponents/SideMenu';
import HomeDashboard from '../subcomponents/HomeDashboard';
import Data from './Data';
import Reports from './Reports';
import Support from './Support';
import { isLoggedIn } from '../../actions/index'
import { connect, useDispatch } from 'react-redux';
import { fetchInventory } from '../../actions';
import { useEffect } from 'react'



const Dashboard = (props) =>{
  const component  =  props.path

  const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(isLoggedIn())
      
    }, [dispatch])

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

const mapStateToProps = (state) =>{
  return{ 
    path: state.path.path,
    inventory: state.inventory.inventory,
    id: state.auth.user.data.user.company_id
   }
}

export default connect(mapStateToProps)(Dashboard);