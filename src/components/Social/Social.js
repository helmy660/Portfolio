import React, { Component } from 'react';
import { SocialMenu, Item, ItemImage, SocialItem} from "./Style";

class Social extends Component {
    
    constructor() {
        super();
        this.state = {
            facebook: "https://www.facebook.com/helmy660",
            linkedin: "https://www.linkedin.com/in/helmy660",
            github: "https://github.com/helmy660",
            hackerrank: "https://www.hackerrank.com/helmy660"
        }
    }
    render() {
        return (
            <SocialMenu>
                <SocialItem
                    src={require('../../assets/facebook.jpeg')}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={this.state.facebook}
                />
                <SocialItem
                    src={require('../../assets/github.png')}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={this.state.github}
                />
                <SocialItem
                    src={require('../../assets/hackerrank.png')}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={this.state.hackerrank}
                />
                <SocialItem
                    src={require('../../assets/linkedin.png')}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={this.state.linkedin}
                />
            </SocialMenu>
        )
    }
}

export default Social;