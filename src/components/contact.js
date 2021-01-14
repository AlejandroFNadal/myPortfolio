import React from 'react'

class Contact extends React.Component{
    render(){
        return(
            <div id="contact" className="content">
                <h2 className="title"> Contact me </h2>
                <hr className="divider"/>
                <div id="contact-body">
                    <div id="contact-info">
                        <h4 className="title">Traditional style</h4>
                        <ul>
                            <li> Phone: +54 9 370 426 0727</li>
                            <li> Email: alexandronadal@gmail.com</li>
                            <li> <a href="https://www.linkedin.com/in/alejandro-nadal/">Linkedin</a></li>
                        </ul>
                    </div>
                    <div id="contact-section">
                        <h4 className="title" >Or just write me up here!</h4>
                        <div id="contact-form"> 
                            <form>
                                <div id="contact-form-labels">
                                    <label className="contact-form-label" id="contact-label-1" for="email">Your email</label><br/>
                                    <label className="contact-form-label" id="contact-label-2" for="name" >Your name</label><br/>
                                    <label className="contact-form-label" id="contact-label-3" for="content-message">Message</label><br />
                                </div>
                                <div id="contact-form-inputs">
                                    <input type="text" id = "contact-input-1" onChange={this.handleUsername}></input><br/>
                                    <input type="text" id = "contact-input-2" onChange={this.handlePassword}></input><br/>
                                    
                                </div>
                                <input id="contact-form-message" type="text"></input><br/>  
                                <button id="contact-form-send">Send your message</button>                      
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;