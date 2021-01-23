import React from "react";
import { CourseList } from "../Components/Course";

export function Courses(props) {
  const courses = props.data ? props.data.courses : [];
  return (
    <section id="courses">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <CourseList courses={courses} />
          </div>
        </div>
      </div>
    </section>
  );
}
