import Highlights from './Highlights';
import Graphs from './Graphs'

const HomeDashboard = ()=>{
  return(
    <div className="home-dashboard-container">
      <div className="top">
        <Highlights />
        <Highlights />
        <Highlights />
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