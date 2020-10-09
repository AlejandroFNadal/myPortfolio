import React from 'react';
import Chart from 'chart.js';

function genValues(iterations, x_n, r,hlogMapArray){
    if(iterations > 0)
    {
        iterations-=1;
        x_n= r*x_n*(1-x_n);
        console.log(x_n)
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
        genValues(100,0.7,4,this.state.logMapArray)
    }
    
    render(){
            return(
                <div>
                    <h1>LogisticMap</h1>
                </div>
            )
        }
}

export default LogisticMap