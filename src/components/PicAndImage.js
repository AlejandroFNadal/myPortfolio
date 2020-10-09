import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
 export const breakline = ''

class PicAndImage extends React.Component{
    render(){
        if(this.props.type ==1)
        {
            return(
                <div>
                    <hr className="EducacionHr"/>
                    <Container className="PicAndImage">
                        <div className="eduSection-l">
                            <img src={this.props.imag} className="left-pic-pic-image"/>
                            <div className="TextInPicAndImage">
                                <h3 className="eduTitle">{this.props.text}</h3>
                                <p className="eduDesc">{this.props.desc}</p>
                            </div>
                            
                        </div>
                    </Container>
                </div>
            ) 
        }
        else{
            return(
                <div>
                    <hr className="EducacionHr"/>
                    <Container className="PicAndImage">
                        <div className="eduSection-r">
                        <img src={this.props.imag} className="right-pic-pic-image"/>
                            <div className="TextInPicAndImage">
                                <h3 className="eduTitle">{this.props.text}</h3>
                                <p className="eduDesc">{this.props.desc}</p>
                            </div>
                            
                        </div>
                    </Container>
                </div> 
            )
        }
         
    }
}

export default PicAndImage;