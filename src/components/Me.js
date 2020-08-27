import React from 'react';
import Container from 'react-bootstrap/Container'
import logo from '../im2.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaGithub, FaLinkedin} from "react-icons/fa"
//import {faGithub} from '@fortawesome/free-brands-svg-icons'
//library.add(faGithub)
class Me extends React.Component{
    render(){
        return(
            <Container className="Me">
                <div className="NameandPic">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className='MyName'>
                        Alejandro Fabian Nadal
                    </p>
                </div>
                <div>
                    <h2>About me</h2>
                    <p className='MyAbstract'>
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
        )
    }
}
export default Me;