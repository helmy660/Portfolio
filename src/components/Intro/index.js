import React from "react";
import { IntroCard, Background, PersonalImage, PersonalDetails, IconShape, Title1, Title2 } from "./Style";
import { CardWrapper } from "../../globalStyle/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  const data = {
    title: "Full Stack Developer",
    address: "Sherouk City - Cairo",
    phone: "01141664845",
    email: "mohamedhelmy6660@gmail.com",
  };
  return (
    <CardWrapper>
      <IntroCard>
        <Background></Background>
        <PersonalImage src={require("../../assets/helmy.png")}></PersonalImage>
        <PersonalDetails>
          <Title1>{data.title}</Title1>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faAddressBook} />
            </IconShape>{" "}
            {data.address}
          </Title2>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faPhone} />
            </IconShape>{" "}
            {data.phone}
          </Title2>
          <Title2>
            <IconShape>
              <FontAwesomeIcon icon={faAt} />
            </IconShape>{" "}
            {data.email}
          </Title2>
        </PersonalDetails>
      </IntroCard>
    </CardWrapper>
  );
}
