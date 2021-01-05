import React from 'react'
var back_url = 'http://localhost:5000/'
class Admin extends React.Component{
    constructor(){
        super(props);

    }
    render(){
        var requestOptions = {
            method:'GET',
            headers:{'Content-Type':'application/json',
                    'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYzMzFhYWM4OTEyNzY1ZjdiYTA0ODkiLCJ1c2VybmFtZSI6ImFsZSIsInBhc3N3b3JkIjoiJDJhJDEwJFBVWnowdEk5cy9ZUnV3UExUcmhWZnVxSlR2M3ZpSFltbHREbk96Ly9QNUl2cjRaQWx5YzZPIiwiX192IjowLCJpYXQiOjE2MDk4MDIyMDh9.Fy5FQEL4idl59dOD65D16Z8l5oGTu6TUlQr1Du7rL0s'
            }
        };
        fetch(back_url+'authorize', requestOptions)
        .then(response  => response.json())
        .then(json => {
            if(json.success === true)
            {
                console.log("We are in")
            }
        })
        return(
            <div>
                <h1>Admin area. Restricted!</h1>
            </div>
        )
    }
}

export default Admin;