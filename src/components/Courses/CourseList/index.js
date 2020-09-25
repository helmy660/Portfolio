import React from "react";
import { CardWrapper } from "../../../style/wrapper";
import { CourseItem } from "../";
import { courses } from "../../../resources";

export function CourseList() {
  return (
    <CardWrapper>
      {courses.map((item, index) => {
        return <CourseItem key={index} course={item}></CourseItem>;
      })}
    </CardWrapper>
  );
}
