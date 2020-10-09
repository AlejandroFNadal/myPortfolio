import React from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
function genValues(iterations, x_n, r,hlogMapArray){
    if(iterations > 0)
    {
        iterations-=1;
        x_n= r*x_n*(1-x_n);
        hlogMapArray.push(x_n)
        return genValues(iterations,x_n,r,hlogMapArray);
    }
    
}
class LogisticMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logMapArray:[]
        };
        this.node=React.createRef();
        genValues(100,0.7,4,this.state.logMapArray)
        console.log(this.state.logMapArray)
    }

   
    render(){
        
          
            return(
                <div>
                    <h1>Logistic Map</h1>
                    <Line data={data}/>
                </div>
            )
        }
}

export default LogisticMap