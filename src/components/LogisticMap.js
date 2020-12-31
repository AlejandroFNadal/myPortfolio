import React from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';


function genValues(iterations, t, x_n, r,hlogMapArray, xlogMapArray){
    console.log("Inside genValues")
    if(t < iterations)
    {
        hlogMapArray.push(x_n)
        t+=1;
        x_n= r*x_n*(1-x_n);
        xlogMapArray.push(t)
        return genValues(iterations,t,x_n,r,hlogMapArray,xlogMapArray);
    }
    if(t=== iterations)
    {
        console.log("Inside hlogMapArray")
        console.log(hlogMapArray)
        return [hlogMapArray, xlogMapArray]
    }
    
};
class LogisticMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iteration:30,
            r:2.1,
            x_n:0.2,
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
        this.handleX_NChange=this.handleX_NChange.bind(this);
        this.simulate = this.simulate.bind(this);
        //var values = genValues(this.state.iteration,0,this.state.x_n,this.state.r,this.state.data.datasets[0].data, this.state.data.labels)
        
    }
    handleRChange(event){
        this.setState({r:event.target.value})
    };
    handleIterationChange(event){
        this.setState({iteration:parseFloat(event.target.value)})
    };
    handleX_NChange(event){
        this.setState({x_n:event.target.value})
        console.log(this.state.x_n)
    };
    simulate(event){
        console.log("Simulating")
        this.state.data.datasets[0].data=[]
        this.state.data.labels=[]
        console.log("Before genValues")
        console.log("r")
        console.log(this.state.r)
        console.log("iteration")
        console.log(this.state.iteration)
        console.log("x_n")
        console.log(this.state.x_n)
        var values=genValues(this.state.iteration,0,this.state.x_n,this.state.r,this.state.data.datasets[0].data, this.state.data.labels)
        let key = 0
        var tempStateData = {...this.state.data}
        console.log("tempStateData")
        console.log(tempStateData)
        console.log("values-0")
        console.log(values[0])
        tempStateData.datasets[0].data=values[0]
        tempStateData.labels=values[1]
        this.setState({data:tempStateData})
        /*this.setState(prevState =>({
            data:{
                ...prevState.data,
                datasets:[values[0]]
            }
        }))*/
    };
    
    render(){
        
          
            return(
                <div id="lm-main">
                    <h1 className="title">Logistic Map</h1>
                    <div id="lm-content">
                    <div id="lm-theory-selection">
                        <div id="lm-definition">
                            <p>A logistic map is a very simple recursive function that displays chaotic behaviour. It can be used to simulate, among other things, population growth.</p>
                            <p>Let's assume the existence of a virus population, such as Covid19, with a certain reproduction rate R, meaning how many individuals will get the virus per each person currently sick. X_N is the percentage of the population currently sick.</p>
                            <p>This is a terribly simple model and it does not take into account a huge number of factors. Lets consider some scenarios</p>
                            <p> With an r lower than 1, the population dies. It may take more days if x_n is closer to the maximum 1, but it will still die. In the case of Covid-19, the r parameter can be kept down with preventive measures such as keeping distance from people, using masks, washing hands, etc</p>
                            <p> If r is higher than 1, the population grows until its theorical maximum and it stays there. </p>
                            <p> With certain values of r, the model exhibits chaotic behaviour. Try with r values in the range of 3.57--4</p>
                        </div>
                        
                    </div>
                    <div id="lm-graph">
                        <Line data={this.state.data}/>
                        <div id="lm-parameter-selector">
                            <form>
                                <div id="lm-labels">
                                    <label className="lm-form-label" for="iterations">Days</label><br/>
                                        <label className="lm-form-label" for="r" >R</label><br/>
                                        <label className="lm-form-label" for="x_n">X_N</label>
                                    </div>
                                    <div id="lm-inputs">
                                        <input type="number" value={this.state.iteration} onChange={this.handleIterationChange}></input><br/>
                                        <input type="text" value={this.state.r} onChange={this.handleRChange}></input><br/>
                                        <input type="text" value={this.state.x_n} onChange={this.handleX_NChange}></input>
                                    </div>
                                    
                            </form>
                        </div>
                        <button id="lm-button" onClick={this.simulate}>Simulate</button>
                   </div>
                   
                    
                    </div>
                    
                </div>
            )
        }
}

export default LogisticMap