import React, { Component } from 'react';
import { Wrapper } from './Style';
import { pdfjs, Document, Page } from "react-pdf";
import file from '../../assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        return(
            <Wrapper>
                <Document
                    file={file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>
            </Wrapper>

        )
    }
}

export default Resume;