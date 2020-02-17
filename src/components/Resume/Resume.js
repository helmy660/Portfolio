import React, { Component } from 'react';
import { ResumeCard } from './Style';
import { CardWrapper } from '../../globalStyle/Style';
import { pdfjs, Document, Page } from "react-pdf";
import file from '../../assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        return(
            <CardWrapper>
                <ResumeCard>
                    <Document
                        file={file}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={1} />
                        <Page pageNumber={2} />
                    </Document>
                </ResumeCard>
            </CardWrapper>
        )
    }
}

export default Resume;