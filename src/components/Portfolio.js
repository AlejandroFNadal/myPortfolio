import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import lagrange from '../Lagrange.png'

class Portfolio extends React.Component{
    render(){
        return(
            <div>
                <Container className="Portfolio">
                    <h1 className="title"> Portfolio</h1>
                    <hr />
                    <h2>My favorites!</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img className= "favProjImg/600x300" src={lagrange}/>
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
                    </Carousel>
                </Container>
            </div>
        )
    }
        
}

export default Portfolio;
