import React from 'react';
import Container from 'react-bootstrap/Container'
import logo from '../im2.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa"

class Me extends React.Component{
    render(){
        return(
            <div>
                <Container className="Me">
                    <div className="NameandPic">
                        <img src={logo} className="my-image" alt="logo" />
                        <h5 className='title' id="my-name">
                            Alejandro Fabian Nadal
                        </h5>
                    </div>
                    <div id="me-about-me">
                        <h2 className="title" id="about-me-title">About me</h2>
                        <p id='my-abstract'>
                            Information Systems Engineering student (4th year). Dedicated, passionate about Artificial Intelligence, Finance, IoT, and backends in general. I have received many scholarships, including Friends of Fulbright and Seeds For The Future Huawei. Excellent teamwork and communication skills. 
                        </p>
                        <div className="SocialMedia">
                            <h3>Social media</h3>
                            <a href="https://github.com/AlejandroFNadal">
                                <FaGithub className="GitLogo" size={25} color="black"/>
                            </a>
                            <FaLinkedin className="LinkedinLogo"size={25} color = "black"/>
                        </div>
                    </div>
                    
                </Container>
            </div>
        )
    }
}
export default Me;