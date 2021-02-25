// import { Tab, Tabs } from 'react-materialize';
// import Data from './Data';
// import Highlights from './Highlights';
// import Graphs from './Graphs';
import SideMenu from './SideMenu';
import Content from './Content';


const Dashboard = () =>{
  return(
      <div className="dashboard-container">
        <SideMenu />
        <Content />
      </div>
  )
}

export default Dashboard;