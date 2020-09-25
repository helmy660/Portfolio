import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faAddressBook } from "@fortawesome/free-solid-svg-icons";

import { IntroCard, Background, PersonalImage, PersonalDetails, IconShape, Title1, Title2 } from "../../style/home";
import { CardWrapper } from "../../style/wrapper";
import { personalInfo } from "../../resources";

export default function Intro() {
  return (
    <CardWrapper>
      <IntroCard>
        <Background></Background>
        <PersonalImage src={require("../../assets/helmy.png")}></PersonalImage>
        <PersonalDetails>
          <Title1>{personalInfo.title}</Title1>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faAddressBook} />
            </IconShape>{" "}
            {personalInfo.address}
          </Title2>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faPhone} />
            </IconShape>{" "}
            {personalInfo.phone}
          </Title2>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faAt} />
            </IconShape>{" "}
            {personalInfo.email}
          </Title2>
        </PersonalDetails>
      </IntroCard>
    </CardWrapper>
  );
}
