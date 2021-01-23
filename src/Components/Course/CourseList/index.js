import React from "react";
import { CardWrapper } from "../../../style/wrapper";
import { CourseItem } from "..";

export function CourseList({ courses }) {
  return (
    <CardWrapper>
      {courses.map((item, index) => {
        return <CourseItem key={index} course={item}></CourseItem>;
      })}
    </CardWrapper>
  );
}
