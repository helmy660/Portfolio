import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCheckCircle, faTasks, faLaptopCode, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SideMenu, Item, Title } from "./Style";


class SideBar extends Component {
    render() {
        return (
            <SideMenu>              
                <Item>
                    <Link to={'/'}>
                        <Title>
                            <FontAwesomeIcon icon={faUserTie}/>&nbsp; &nbsp;Home
                        </Title>
                    </Link>
                </Item>

                <Item>
                    <Link to={'/skills'}>
                        <Title>
                            <FontAwesomeIcon icon={faLaptopCode}/>&nbsp; &nbsp;Skills
                        </Title>
                    </Link>
                </Item>
    
                <Item>
                    <Link to={'/projects'}>
                        <Title>
                            <FontAwesomeIcon icon={faTasks}/>&nbsp; &nbsp;Projects
                        </Title>
                    </Link>
                </Item>

                <Item>
                    <Link to={'/courses'}>
                        <Title>
                            <FontAwesomeIcon icon={faCheckCircle}/>&nbsp; &nbsp;Courses
                        </Title>
                    </Link>
                </Item>

                <Item>
                    <Link to={'/cv'}>
                        <Title>
                            <FontAwesomeIcon icon={faFile}/>&nbsp; &nbsp;Resume
                        </Title>
                    </Link>
                </Item>

            </SideMenu>
        )
    }
}

export default SideBar;