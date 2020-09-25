import React from "react";
import { SocialMenu, SocialItem } from "./Style";

export default function Social() {
  const data = {
    facebook: "https://www.facebook.com/helmy660",
    linkedin: "https://www.linkedin.com/in/helmy660",
    github: "https://github.com/helmy660",
    hackerrank: "https://www.hackerrank.com/helmy660",
  };
  return (
    <SocialMenu>
      <SocialItem
        src={require("../../assets/facebook.jpeg")}
        target="_blank"
        rel="noopener noreferrer"
        href={data.facebook}
      />
      <SocialItem
        src={require("../../assets/github.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={data.github}
      />
      <SocialItem
        src={require("../../assets/hackerrank.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={data.hackerrank}
      />
      <SocialItem
        src={require("../../assets/linkedin.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={data.linkedin}
      />
    </SocialMenu>
  );
}
