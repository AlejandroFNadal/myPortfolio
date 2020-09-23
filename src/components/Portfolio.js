import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import lagrange from '../Lagrange.png'
import minSalud from '../MinisterioSalud.png'
import '../fonts/Roboto/Roboto-Regular.ttf'
class Portfolio extends React.Component{
    render(){
        return(
            <div>
                <Container className="Portfolio">
                    <h1 className="P-Title"> Portfolio</h1>
                    <hr />
                    <h2>My favorites!</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img className= "favProjImg" src={lagrange}/>
                            <Carousel.Caption>
                                <h3>
                                    Non Linear Programing Solver
                                </h3>
                                <p>
                                    An app that aids you in optimizing real production systems
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className= "favProjImg" src={minSalud}/>
                            <Carousel.Caption>
                                <h3>
                                    Hospital Control Center
                                </h3>
                                <p>
                                    It can register and process health centers data such as number of patients, resources, and resources' petitions.  
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        )
    }
        
}

export default Portfolio;
