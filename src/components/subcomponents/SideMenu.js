import { sideMenuPath } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const SideMenu = (props) =>{

  const selected  =  props.path
  
  const handleClick = (string) =>{
    props.sideMenuPath(string)
  }
  return(
    <div className="dashboard-side-menu">
      <ul>
        <li className={selected === 'dashboard' ? 'active': null } onClick={()=>{handleClick('dashboard')}}>
          <Link to="/dashboard" className="dashboard-side-menu-link"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
        </li>
        <li className={selected === 'data' ? 'active': null } onClick={()=>{handleClick('data')}} >
          <Link to="/dashboard" className="dashboard-side-menu-link"><i className="fas fa-briefcase"></i> Products</Link>
        </li>
        <li className={selected === 'reports' ? 'active': null } onClick={()=>{handleClick('reports')}} >
          <Link to="/dashboard" className="dashboard-side-menu-link"><i className="fas fa-chart-line"></i> Reports</Link>
        </li>
        <li className={selected === 'support' ? 'active': null } onClick={()=>{handleClick('support')}} >
          <Link to="/dashboard" className="dashboard-side-menu-link"><i className="far fa-question-circle"></i> Support</Link>
        </li>
      </ul>
    </div>
  )
}
const mapStateToProps = (state) =>{
  return{ path: state.path.path }
}

export default connect(mapStateToProps, {sideMenuPath})(SideMenu);