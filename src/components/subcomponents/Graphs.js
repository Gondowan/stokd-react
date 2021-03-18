import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import { connect } from 'react-redux';
import { Component } from 'react';


class Graphs extends Component{
  state = {data: [], maxCount: 0}

  processData(){
    if(this.props.inventory){
      const array = []
      this.props.inventory.map(elem =>{
          return array.push({ quantity: elem.content.quantity, label: `${elem.content.name }: ${elem.content.quantity}`, sku: elem.content.sku })
        })
      this.setState({data: array})
      let top = 0
      this.props.inventory.map(item =>{
        return item.content.quantity > top ? top = item.content.quantity : null
      })
      this.setState({maxCount: top})
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
          width={1500} 
          height={750}
        >
          <VictoryAxis 
          dependentAxis
          crossAxis
          tickValues={[0, this.state.maxCount]}
          offsetY={190}
        />
        <VictoryAxis 
          crossAxis
          tickValues={this.state.data.map(elem =>elem.quantity)}
          tickFormat={t => t === 0 ? 'SKU' : null}
        />
          <VictoryBar 
            data={this.state.data} 
            x="sku"
            y="quantity" 
            labelComponent={<VictoryLabel angle={90} verticalAnchor="start" textAnchor="start" lineHeight={1.2} dx={5} />}
            cornerRadius={5}
            style={{
              data: {fill: "tomato", width: 25},
              labels: {fontSize: 17, angle: 90, fill:"white"}
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