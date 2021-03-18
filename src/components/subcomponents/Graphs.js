
// import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryGroup } from 'victory';
import { connect } from 'react-redux';
import { Component } from 'react';


class Graphs extends Component{
  state = {data: []}
  processData(){
    if(this.props.inventory){
      const array = []
      this.props.inventory.map(elem =>{
          return array.push({ quantity: elem.content.quantity, label: `${elem.content.name }: ${elem.content.quantity}`, name: elem.content.name })
        })
      this.setState({data: array})
    }
  }

  componentDidMount(){
    this.processData()
    this.renderGraph()
  }

  renderGraph(){
    if(Object.entries(this.state).length > 0){
      
      return(
        <VictoryChart 
          domainPadding={[100, 10]}
          width={1000} 
          
          height={500}
          style={{
                  labels: {fontSize: 5},
                  ticklabels:{angle: 90}                
                }}
        >
          <VictoryBar 
            data={this.state.data} 
            x="name"
            y="quantity" 
            
            labelComponent={<VictoryLabel angle={90} verticalAnchor="start" textAnchor="start" lineHeight={1.2} dx={5} />}
            
            style={{
              data: {fill: "tomato", width: 20},
              labels: {fontSize: 17, angle: 90},
              ticklabels: {angle: 90}
              
            }}
          >
          </VictoryBar>
        </VictoryChart>
      )
    }    
  }
  render(){
    
    return(
      <div className="graph">{this.state.data.length > 0 ? this.renderGraph() : "Loading data"}</div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {inventory: state.inventory.inventory}
}

export default connect(mapStateToProps, null)(Graphs);