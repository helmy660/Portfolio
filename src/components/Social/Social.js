import React, { Component } from 'react';
import { SocialMenu, Item, ItemImage} from "./Style";

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
                <Item>
                    <a target="_blank" rel="noopener noreferrer" href={this.state.facebook}>
                        <ItemImage src={require('../../assets/facebook.jpeg')}/>
                    </a>
                </Item>
                <Item>
                    <a target="_blank" rel="noopener noreferrer" href={this.state.github}> 
                        <ItemImage src={require('../../assets/github.png')}/>
                    </a>
                </Item>
                <Item> 
                    <a target="_blank" rel="noopener noreferrer" href={this.state.hackerrank}> 
                        <ItemImage src={require('../../assets/hackerrank.png')}/>
                    </a>
                </Item>
                <Item>
                    <a target="_blank" rel="noopener noreferrer" href={this.state.linkedin}> 
                        <ItemImage src={require('../../assets/linkedin.png')}/>
                    </a>
                </Item>
            </SocialMenu>
        )
    }
}

export default Social;