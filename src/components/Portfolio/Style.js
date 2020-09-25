import styled from "styled-components";
import { device } from "../../globalStyle/devices";

export const PortfolioWrapper = styled.div`
  width: 30%;
  height: 75%;
  top: 10%;
  right: 10px;
  position: fixed;
  -webkit-user-select: none;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
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
