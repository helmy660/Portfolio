import React from "react";
import { CardWrapper } from "../../../style/wrapper";
import { SkillItem } from "../";
import { skills } from "../../../resources";

export function SkillList() {
  return (
    <CardWrapper>
      {skills.map((item, index) => {
        return <SkillItem key={index} skill={item} />;
      })}
    </CardWrapper>
  );
}
