import styled from 'styled-components';
import { device } from '../../globalStyle/devices';

export const SocialMenu = styled.div`
    width: 350px;
    min-width: 350px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    bottom: 0;
    left: 75%;
    position:fixed;

    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet} {
        width: 100vw;
        bottom: 0px;
        left: 0px;
        align-items: center;
    }

    // @media ${device.tablet} {
    //     left: 25%;
    // }
`

export const Item = styled.div`
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;

    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet} {
        width: 70px;
        height: 70px;
    }
`

export const ItemImage = styled.img`
    src: "${props => props.src}";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        transition: 0.5s ease;
    }
`