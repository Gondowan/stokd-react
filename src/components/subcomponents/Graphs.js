import React, { useState, useEffect } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';

const Graphs = (props) => {
  const [ data, setData ] = useState([])
  const [ maxCount, setMaxCount ] = useState(0)

  useEffect(()=>{
    const array = []
    props.data.map(elem => array.push({ quantity: elem.content.quantity, label: `${elem.content.name }: ${elem.content.quantity}`, sku: elem.content.sku }))
    setData(array)
    let top = 0
    props.data.map(item =>{
      return item.content.quantity > top ? top = item.content.quantity : null
    })
    setMaxCount(top)

    
  },[props.data, props.maxCount])

  return (
    <div className="graph">
      <VictoryChart 
        domainPadding={[100, 10]}
        width={1500} 
        height={750}
      >
        <VictoryAxis 
        dependentAxis
        crossAxis
        tickValues={[0, maxCount]}
        offsetY={190}
      />
      <VictoryAxis 
        crossAxis
        tickValues={data}
        tickFormat={t => t === 0 ? 'SKU' : null}
      />
        <VictoryBar
          data={data} 
          x="sku"
          y="quantity" 
          labelComponent={<VictoryLabel angle={90} verticalAnchor="start" textAnchor="start" lineHeight={0.8} dx={5} />}
          cornerRadius={5}
          style={{
            data: {fill: "tomato", width: 25},
            labels: {fontSize: 25, angle: 90, fill:"white", fontWeight: 700}
          }}
        >
        </VictoryBar>
      </VictoryChart>
    </div>
  )
}

export default Graphs;
