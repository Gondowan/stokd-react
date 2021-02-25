import { Link } from 'react-router-dom';

const SideMenu = () =>{
  return(
    <div className="dashboard-side-menu">
          <ul>
            <li className="active">
              <Link to="#" className="dashboard-side-menu-link"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
            </li>
            <li>
              <Link to="/products" className="dashboard-side-menu-link"><i className="fas fa-briefcase"></i> Products</Link>
            </li>
            <li>
              <Link to="/reports" className="dashboard-side-menu-link"><i className="fas fa-chart-line"></i> Reports</Link>
            </li>
            <li>
              <Link to="/support" className="dashboard-side-menu-link"><i className="far fa-question-circle"></i> Support</Link>
            </li>
          </ul>
        </div>
  )
}

export default SideMenu;