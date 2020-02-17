import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faCheckCircle, faTasks, faLaptopCode, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SideMenu, SideItem, Title, ItemDetails } from "./Style";


class SideBar extends Component {
    render() {
        return (
            <SideMenu>              
                <SideItem>
                    <Link to={'/'}>
                        <ItemDetails>
                            <FontAwesomeIcon icon={faUserTie}/>
                            <Title>Home</Title>
                        </ItemDetails>
                    </Link>
                </SideItem>

                <SideItem>
                    <Link to={'/skills'}>
                        <ItemDetails>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                            <Title>Skills</Title>
                        </ItemDetails>
                    </Link>
                </SideItem>
    
                <SideItem>
                    <Link to={'/projects'}>
                        <ItemDetails>
                            <FontAwesomeIcon icon={faTasks}/>
                            <Title>Projects</Title>
                        </ItemDetails>
                    </Link>
                </SideItem>

                <SideItem>
                    <Link to={'/courses'}>
                        <ItemDetails>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <Title>Courses</Title>
                        </ItemDetails>
                    </Link>
                </SideItem>

                <SideItem>
                    <Link to={'/cv'}>
                        <ItemDetails>
                            <FontAwesomeIcon icon={faFile}/>
                            <Title>Resume</Title>
                        </ItemDetails>
                    </Link>
                </SideItem>
            </SideMenu>
        )
    }
}

export default SideBar;