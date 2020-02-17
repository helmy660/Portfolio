import React, { Component } from 'react';
import { CourseCard, CourseBackground, CourseDetails, CourseTitle, CourseAuthor, CourseDuration, IconShape } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


class CourseItem extends Component {
    render() {
        return (
            <CourseCard>
                <CourseBackground src={this.props.course.courseImage}></CourseBackground>
                <CourseDetails>
                    <CourseTitle>{this.props.course.courseTitle}</CourseTitle>
                    <CourseDuration>
                        <IconShape><FontAwesomeIcon icon={faClock} /></IconShape> &nbsp;{this.props.course.courseDuration}
                    </CourseDuration>
                    <CourseAuthor>{this.props.course.courseAuthor}</CourseAuthor>
                </CourseDetails>
            </CourseCard>
        );
    }
}

export default CourseItem;