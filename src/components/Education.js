import React from 'react';
import Container from 'react-bootstrap/Container'
import utnLogo from '../UTN.jpeg'
import PicAndImage from './PicAndImage'
import unmLogo from '../UNM.jpeg'

class Education extends React.Component{
    render(){
       return(
            <div>
                <Container className="Education">
                    <h2 className="title">Education</h2>
                    
                    <PicAndImage
                        imag={utnLogo}
                        text="Universidad Tecnologica Nacional" 
                        type="1" 
                        desc="Information Systems Engineering, currently in 4th year. Average 8.2/10" />
                    <PicAndImage
                        imag={unmLogo}
                        text="University of New Mexico" 
                        type="2" 
                        desc={"I participated in a two months educative experience in the University of New Mexico. There, I assisted to a Introduction to Neural Networks, and Complex Adaptive Systems. I was able to go thanks to the Friends of Fulbright Grant."}/>
                </Container>
                
            </div>
            )
    }
}
export default Education;