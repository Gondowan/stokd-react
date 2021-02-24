import SideNavigation from './SideNav';
import Data from './Data';
import Highlights from './Highlights';
import Graphs from './Graphs'

const Dashboard = () =>{
  return(
    <div className="full-width-dashboard">
      <div className="navigation">
        <SideNavigation />
      </div>
      <div className="highlights">
        <Highlights />
        <Highlights />
        <Highlights />
      </div>
      
      <div className="content">
        <div>
          <Graphs />
          <Graphs />
          <Graphs />
        </div>
        <Data />
      </div>
    </div>
  )
}

export default Dashboard;