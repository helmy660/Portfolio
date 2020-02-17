import React, { Component } from 'react';
import { SkillCard, SkillImage, SkillDetails, SkillTitle, SkillStars } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class SkillItem extends Component {
    render() {
        return (
            <SkillCard>
                <SkillImage src={this.props.skill.skillImage}></SkillImage>
                <SkillDetails>
                    <SkillTitle>{this.props.skill.skillTitle}</SkillTitle>
                    <SkillStars>
                    {
                        this.props.skill.stars.map(item => {
                            if(item === 1){
                                return <FontAwesomeIcon icon={faStar} color="orange"/>
                            } else {
                                return <FontAwesomeIcon icon={faStar}/>
                            }
                        })
                    }
                    </SkillStars>
                </SkillDetails>
            </SkillCard>
        );
    }
}

export default SkillItem;