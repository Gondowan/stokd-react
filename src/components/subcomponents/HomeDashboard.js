import Highlights from './Highlights';
import Graphs from './Graphs';
import Tasks from './Tasks';
import { connect } from 'react-redux'

const HomeDashboard = (props)=>{
  return(
    <div className="home-dashboard-container">
        <Highlights />
        <Graphs />
        <Tasks />
    </div>
  )
}
const mapStateToProps = (state) =>{
  return {inventory: state.inventory.inventory}
}

export default connect(mapStateToProps,{})(HomeDashboard);