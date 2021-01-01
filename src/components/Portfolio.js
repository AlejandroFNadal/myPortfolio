import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import lagrange from '../Lagrange.png'
import minSalud from '../MinisterioSalud.png'
import logMap from '../logMap.png'
import '../fonts/Roboto/Roboto-Regular.ttf'
import holder from 'holderjs'
import {useHistory} from "react-router-dom"


function Portfolio (){
    const history = useHistory();
    var handleClickOnLogMap = () =>{
        history.push("/logisticMap")
    }
    return(
            <div>
                <Container className="Portfolio">
                    <h1 id="p-title" className="title"> Portfolio</h1>
                    <hr />
                    <h2 id="fav-proj-title">My favorites!</h2>
                    <Carousel>
                        <Carousel.Item onClick={handleClickOnLogMap}>
                            <img className="favProjImg" src={logMap}/>
                            <Carousel.Caption>
                                <h3>
                                    Population Growth Model - Logistic Map
                                </h3>
                                <p>
                                    A simple graph program that shows the behaviour of a population size. It also displays chaotic behaviour.
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
                    {/* <div className="mostProjects">
                        <h2 className="title"> Some other things I am working on</h2>
                        <div className="P-twoBlock">
                            <Card className="P-Card">
                            <Card.Img variant="top" src="holder.js/100px300" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button className = "CardButton" variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card className="P-Card">
                            <Card.Img variant="top" src="holder.js/100px300" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button className = "CardButton" variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div> */}
            
                </Container>
            </div>
        )
        
}

export default Portfolio;
