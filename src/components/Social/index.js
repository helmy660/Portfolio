import React from "react";
import { SocialMenu, SocialItem } from "../../style/social";
import { social } from "../../resources";

export default function Social() {
  return (
    <SocialMenu>
      <SocialItem
        src={require("../../assets/facebook.jpeg")}
        target="_blank"
        rel="noopener noreferrer"
        href={social.facebook}
      />
      <SocialItem
        src={require("../../assets/github.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={social.github}
      />
      <SocialItem
        src={require("../../assets/hackerrank.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={social.hackerrank}
      />
      <SocialItem
        src={require("../../assets/linkedin.png")}
        target="_blank"
        rel="noopener noreferrer"
        href={social.linkedin}
      />
    </SocialMenu>
  );
}
