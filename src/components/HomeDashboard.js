import Highlights from './Highlights';
import Graphs from './Graphs';
import Tasks from './Tasks';

const HomeDashboard = ()=>{
  return(
    <div className="home-dashboard-container">
        <Highlights />
        <Graphs />
        <Tasks />
    </div>
  )
}

export default HomeDashboard;