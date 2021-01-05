import React from 'react'
import {Redirect} from 'react-router-dom'

var back_url = 'http://localhost:5000/'

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token:this.props.location.state ? this.props.location.state.token : null,
            component:<h1>HI</h1>,
            accepted: 'Not yet'
        }
        var requestOptions = {
            method:'GET',
            headers:{'Content-Type':'application/json',
                    'Authorization': this.state.token
            }
        };
        console.log(this.state.token)
        if(this.state.token !== null){
            fetch(back_url+'authorize', requestOptions)
            .then(response  => response.json())
            .then(json => {
                console.log("inside admin")
                console.log(json)
                if(json.success === true)
                {
                    console.log("We are in")
                    this.setState({component:<h1>We are in</h1>})
                }
                else{
                    this.setState({component:<h1>You should not be here, you will be redirected</h1>})
                }
            })
        }
        else{
            this.state.component=<Redirect to="/login"/>
        }
        
        
    }
    /*checkLog = function(){
        if(this.state.token ==)
    }*/
    render(){
        
        return(
            <div>
                <h1>Admin area. Restricted!</h1>
                {this.state.component}
            </div>
        )
    }
}

export default Admin;