import React, { Component } from 'react';
import { Wrapper, Card, SkillImage, Details, SkillTitle, Stars } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class SkillItem extends Component {
    render() {
        return (
            <Wrapper>
                <Card>
                    <SkillImage src={this.props.skill.skillImage}></SkillImage>
                    <Details>
                        <SkillTitle>{this.props.skill.skillTitle}</SkillTitle>
                        <Stars>
                        {
                            this.props.skill.stars.map(item => {
                                if(item === 1){
                                    return <FontAwesomeIcon icon={faStar} color="orange"/>
                                } else {
                                    return <FontAwesomeIcon icon={faStar}/>
                                }
                            })
                        }
                        </Stars>
                    </Details>
                </Card>
            </Wrapper>
        );
    }
}

export default SkillItem;