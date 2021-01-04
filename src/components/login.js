import React from 'react'

class Login extends React.Component{
    render(){
        return(
            <div id="login">
                <h2>Maintenance area. We will need to see some id, mate</h2>

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
        )
    }
}

export default Login;