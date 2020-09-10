import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import utn from '../UTN.jpeg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class PicAndImage extends React.Component{
    render(){
        return(
            <Container className="PicAndImage">
                <div className="eduSection">
                    <img src={utn} className="PicInPicAndImage"/>
                    <div className="TextInPicAndImage">
                        <h3 className="eduTitle">{this.props.text}</h3>
                        <p>Lorem Ipsum Dolor Sit Amet</p>
                    </div>
                    
                </div>
                
                    
                
            </Container>
        )  
    }
}

export default PicAndImage;