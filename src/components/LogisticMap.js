import React from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';


function genValues(iterations, x_n, r,hlogMapArray, xlogMapArray){
    if(iterations > 0)
    {
        iterations-=1;
        x_n= r*x_n*(1-x_n);
        console.log(x_n)
        xlogMapArray.push(100-iterations)
        hlogMapArray.push(x_n)
        return genValues(iterations,x_n,r,hlogMapArray,xlogMapArray);
    }
    
}

class LogisticMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iteration:0,
            r:2,
            data : {
                labels: [],
                datasets:
                [{
                    label: 'Logistic Map',
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
                    data: []
                }]
            }
        };
        this.node=React.createRef();
        this.handleRChange= this.handleRChange.bind(this);
        this.handleIterationChange=this.handleIterationChange.bind(this);
    }
    handleRChange(event){
        this.state.data.datasets[0].data=[]
        this.state.data.labels=[]

        this.setState({r:event.target.value})
        console.log(this.state.r)
        console.log(this.state.data.datasets[0].data)
        genValues(100,0.7,this.state.r,this.state.data.datasets[0].data, this.state.data.labels)
    };
    handleIterationChange(event){
        this.setState({iteration:event.target.value})
    }
   
    render(){
        
          
            return(
                <div id="lm-main">
                    <h1 className="title">Logistic Map</h1>
                    <div id="lm-content">
                    <div id="lm-theory-selection">
                        <div id="lm-definition">
                            A logistic map is...
                        </div>
                        <div id="lm-parameter-selector">
                            <form>
                                <label for="iterations">Iterations</label>
                                <input type="text"></input><br/>
                                <label for="r" > {this.state.r}</label>
                                <input type="text" value={this.state.r} onChange={this.handleRChange}></input>
                            </form>
                        </div>
                    </div>
                   <div id="lm-graph">
                    <Line data={this.state.data}/>
                   </div>
                    
                    </div>
                    
                </div>
            )
        }
}

export default LogisticMap