import React, { Component } from 'react';
import { Wrapper, Card, Background, CourseDetails, CourseTitle, CourseAuthor, CourseDuration, IconShape } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


class CourseItem extends Component {
    render() {
        return (
            <Wrapper>
                <Card>
                    <Background src={this.props.course.courseImage}></Background>
                    <CourseDetails>
                        <CourseTitle>{this.props.course.courseTitle}</CourseTitle>
                        <CourseDuration>
                            <IconShape><FontAwesomeIcon icon={faClock} /></IconShape> &nbsp;{this.props.course.courseDuration}
                        </CourseDuration>
                        <CourseAuthor>{this.props.course.courseAuthor}</CourseAuthor>
                    </CourseDetails>
                </Card>
            </Wrapper>
        );
    }
}

export default CourseItem;