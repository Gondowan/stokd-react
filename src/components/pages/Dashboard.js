import SideMenu from '../subcomponents/SideMenu';
import HomeDashboard from '../subcomponents/HomeDashboard';
import Data from './Data';
import Reports from './Reports';
import Support from './Support';
import { connect } from 'react-redux';


const Dashboard = (props) =>{
  const component  =  props.path

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
  return{ path: state.path.path }
}

export default connect(mapStateToProps)(Dashboard);