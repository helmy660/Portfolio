import React from "react";
import {
  CourseCard,
  CourseBackground,
  CourseDetails,
  CourseTitle,
  CourseAuthor,
  CourseDuration,
  IconShape,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function CourseItem(props) {
  return (
    <CourseCard>
      <CourseBackground src={props.course.courseImage}></CourseBackground>
      <CourseDetails>
        <CourseTitle>{props.course.courseTitle}</CourseTitle>
        <CourseDuration>
          <IconShape>
            <FontAwesomeIcon icon={faClock} />
          </IconShape>{" "}
          {props.course.courseDuration}
        </CourseDuration>
        <CourseAuthor>{props.course.courseAuthor}</CourseAuthor>
      </CourseDetails>
    </CourseCard>
  );
}
