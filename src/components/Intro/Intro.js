import React, { Component } from 'react';
import { Card, Background, PersonalImage, PersonalDetails, IconShape, Title1, Title2 } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faAddressBook } from '@fortawesome/free-solid-svg-icons';

class Intro extends Component {
    
    constructor(){
        super();
        this.state = {
            title: "Full Stack Developer",
            address: 'Sherouk City - Cairo',
            phone: '01141664845',
            email: 'mohamedhelmy6660@gmail.com'
        }
    }
    render() {
        return (
            <Card>
                <Background></Background>
                <PersonalImage src={require('../../assets/helmy.png')}></PersonalImage>
                <PersonalDetails>
                    <Title1>{this.state.title}</Title1>
                    <Title2>
                        <IconShape><FontAwesomeIcon icon={faAddressBook} /></IconShape> &nbsp;{this.state.address}
                    </Title2>
                    <Title2>
                        <IconShape><FontAwesomeIcon icon={faPhone} /></IconShape> &nbsp;{this.state.phone}
                    </Title2>
                    <Title2>
                        <IconShape><FontAwesomeIcon icon={faAt} /></IconShape> &nbsp;{this.state.email}
                    </Title2>
                </PersonalDetails>
            </Card>
        );
    }
}

export default Intro;