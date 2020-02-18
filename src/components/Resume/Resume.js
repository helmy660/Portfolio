import React, { Component } from 'react';
import { ResumeCard, Iframe } from './Style';
import { CardWrapper } from '../../globalStyle/Style';
import file from '../../assets/resume.pdf';

class Resume extends Component {
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        return(
            <CardWrapper>
                <ResumeCard>
                    <Iframe src={file}/>
                </ResumeCard>
            </CardWrapper>
        )
    }
}

export default Resume;