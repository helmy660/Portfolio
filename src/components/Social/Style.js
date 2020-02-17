import styled from 'styled-components';
import { device } from '../../globalStyle/devices';

export const SocialMenu = styled.div`
    width: 20%;
    min-width: 20%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    bottom: 0px;
    left: 70%;
    position:fixed;

    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet} {
        width: 100vw;
        min-width: 100vw;
        height: 10vh;
        bottom: 0px;
        left: 0px;
        margin: 15px auto;
    }
`

export const SocialItem = styled.a`
    background: url("${props => props.src}") no-repeat;
    background-size: 100% 100%;
    width: 20%;
    min-width: 20%;
    height: 90%;
    border-radius: 50%;
    margin: 0 auto;

    &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        transition: 0.5s ease;
    }
`