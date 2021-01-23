import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { SkillCard, SkillImage, SkillDetails, SkillTitle, SkillStars } from "../../../style/skills";

export function SkillItem(props) {
  return (
    <SkillCard>
      <SkillImage src={props.skill.skillImage} />
      <SkillDetails>
        <SkillTitle>{props.skill.name}</SkillTitle>
        <SkillStars>
          {props.skill.stars.map((item) => {
            if (item === 1) {
              return <FontAwesomeIcon icon={faStar} color="orange" />;
            } else {
              return <FontAwesomeIcon icon={faStar} />;
            }
          })}
        </SkillStars>
      </SkillDetails>
    </SkillCard>
  );
}
