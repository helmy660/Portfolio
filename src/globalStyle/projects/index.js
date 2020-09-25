import styled from "styled-components";
import { color7, color1, color5, color6, color2 } from "../colorCode";
import { device } from "../devices";

export const ProjectCard = styled.div`
  width: 70%;
  min-width: 70%;
  height: 100%;
  margin-bottom: 40px;
  border-radius: 15px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 8px;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL}, ${device.tablet} {
    width: 90%;
    min-width: 90%;
  }
`;

export const ProjectTitle = styled.div`
  height: 100%;
  color: ${color1};
  margin-bottom: 10px;
  font-size: 1.4em;
  font-weight: bold;
  font-style: oblique;
  text-shadow: 5px 5px 13px ${color2};
`;

export const ProjectDesc = styled.div`
  height: 100%;
  color: ${color2};
  background-color: ${color1};
  padding: 7px 7px;
  border: 2px solid ${color7};
  text-align: justify;
  font-size: 1.08em;
  font-style: oblique;
  opacity: 0.8;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectTool = styled.div`
  color: ${color2};
  font-size: 1em;
  background-color: orange;
  border-radius: 10px;
  margin: 10px 2px;
  padding: 3px 3px;
`;

export const ProjectLink = styled.div`
  width: 100%;
  color: ${color6};
  background-color: ${color7};
  font-size: 1em;
  font-weight: bold;
  margin-top: 30px;
  padding: 5px 0px 5px 15px;
  border-radius: 10px;

  &:hover {
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    transition: 0.3s ease;
    box-shadow: 3px 3px 2px ${color5};
  }
`;
