import styled from "styled-components";
import { device } from "./globalStyle/devices";

export const Wrapper = styled.div`
  background-image: url("https://images.wallpapersden.com/image/download/star-lord-colorful_58140_2560x1440.jpg");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    background-image: none;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
