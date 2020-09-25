import styled from "styled-components";
import { color1, color2, color5 } from "../colorCode";
import { device } from "../devices";

export const CourseCard = styled.div`
  width: 100%;
  min-width: 100%;
  height: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CourseBackground = styled.div`
  height: 50%;
  width: 90%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

export const CourseDetails = styled.div`
  height: 40%;
  width: 90%;
  background-color: ${color1};
  padding-top: 10px;
  color: ${color2};
  font-family: "Times New Roman", Times, serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const CourseTitle = styled.h1`
  font-size: 0.9em;
  margin-bottom: 20px;
  font-weight: bold;
  font-style: oblique;
  text-shadow: 2px 2px 13px ${color2};

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 0.8em;
  }
`;

export const CourseAuthor = styled.p`
  width: 40%;
  font-size: 1em;
  margin: 0 auto;
  border: 2px solid ${color2};
  background-color: orange;
  border-radius: 12px;
  padding: 3px;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 0.9em;
  }
`;

export const CourseDuration = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 0.9em;
  }
`;

export const IconShape = styled.div`
  display: inline;
  color: ${color5};
`;
