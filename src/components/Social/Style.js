import styled from "styled-components";
import { device } from "../../globalStyle/devices";

export const SocialMenu = styled.div`
  width: 20%;
  min-width: 20%;
  height: 10%;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  bottom: 10px;
  right: 6%;
  position: fixed;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 100%;
    min-width: 100%;
    height: 10vh;
    bottom: 0px;
    right: 0px;
    margin: 15px auto;
    position: absolute;
  }
`;

export const SocialItem = styled.a`
  background: url("${(props) => props.src}") no-repeat;
  background-size: 100% 100%;
  width: 16%;
  min-width: 16%;
  height: 75%;
  border-radius: 50%;
  margin: 0 auto;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 0.5s ease;
  }
`;
