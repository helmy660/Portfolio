import styled from "styled-components";
import { color1, color7, color2 } from "../../globalStyle/colorCode";
import { device } from "../../globalStyle/devices";

export const SkillCard = styled.div`
  width: 70%;
  min-width: 70%;
  height: 18%;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: ${color1};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    transition: 0.3s ease;
    box-shadow: 3px 3px 3px ${color7};
  }

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 90%;
    min-width: 90%;
  }
`;

export const SkillImage = styled.img`
  src: "${(props) => props.src}";
  border-radius: 50%;
  height: 80px;
  width: 80px;
  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 30%;
  }
`;

export const SkillDetails = styled.div`
  margin-left: 20px;
`;

export const SkillTitle = styled.div`
  color: ${color2};
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SkillStars = styled.div`
  color: ${color7};
  font-size: 13px;
`;
