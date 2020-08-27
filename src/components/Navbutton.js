import React from 'react'

class Navbutton extends React.Component{
    render(){
        return(
            <div className="Navbutton">
                {this.props.name}
            </div>
        );
    }
}
export default Navbutton;