import React from 'react'

var back_url = 'http://localhost:5000/'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            token:''
        }
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleUsername(event){
        this.setState({username:event.target.value})
    }
    handlePassword(event){
        this.setState({password:event.target.value})
    }
    handleLogin(event){
        var requestOptions = {
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })
        }
        console.log("Body")
        console.log(requestOptions)
        fetch(back_url+'signin', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    render(){
        return(
            <div id="login">
                <h2 className="title">Maintenance area. We will need to see some id, mate</h2>
                <div id="log-form"> 
                    <form>
                        <div id="log-labels">
                            <label className="log-form-label" for="username">User</label><br/>
                            <label className="log-form-label" for="password" >Pass</label><br/>
                        </div>
                        <div id="log-inputs">
                            <input type="text" onChange={this.handleUsername}></input><br/>
                            <input type="password"  onChange={this.handlePassword}></input><br/>
                        </div>                        
                    </form>
                </div>
                <button id="log-button" onClick={this.handleLogin}> Let me in, I own the site</button>
                
            </div>
        )
    }
}

export default Login;