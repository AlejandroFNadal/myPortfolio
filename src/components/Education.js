import React from 'react';
import Container from 'react-bootstrap/Container'
import utnLogo from '../UTN.jpeg'
import PicAndImage from './PicAndImage'


class Education extends React.Component{
    render(){
       return(
            <div>
                <Container className="Education">
                    <h1 className="title">Education</h1>
                    <hr className="EducacionHr"/>
                    <PicAndImage text="holis" type="1" />
                </Container>
                
            </div>
            )
    }
}
export default Education;