import styled from "styled-components";
import { device } from "./devices";

export const Wrapper = styled.div`
  background-image: url("https://images.wallpapersden.com/image/download/star-lord-colorful_58140_2560x1440.jpg");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL}, ${device.tablet} {
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

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PortfolioWrapper = styled.div`
  width: 30%;
  height: 75%;
  top: 10%;
  right: 10px;
  position: fixed;
  -webkit-user-select: none;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL}, ${device.tablet} {
    width: 80%;
    min-width: 80%;
    height: 60%;
    min-height: 60%;
    right: 10%;
    top: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
