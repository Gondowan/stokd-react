import Highlights from './Highlights';
import Graphs from './Graphs';
import Tasks from './Tasks';

const HomeDashboard = ()=>{
  return(
    <div className="home-dashboard-container">
      <div className="top">
        <Highlights />
        <Highlights />
        <Tasks />
      </div>
      <div className="bottom">
        <Graphs />
        <Graphs />
        <Graphs />
      </div>
    </div>
  )
}

export default HomeDashboard;