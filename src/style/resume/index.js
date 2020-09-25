import styled from "styled-components";
import { device } from "../devices";

export const ResumeCard = styled.div`
  width: 50%;
  height: 90%;
  overflow: auto;
  position: fixed;
  left: 27%;
  top: 0%;
  opacity: 0.95;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL}, ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 72vh;
    top: 15%;
    left: 0px;
  }
`;
export const Iframe = styled.iframe`
  width: 90%;
  height: 90%;
`;
