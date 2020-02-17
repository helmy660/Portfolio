import styled from 'styled-components';
import { device } from '../../globalStyle/devices';

export const SideMenu = styled.div`
    width: 200px;
    min-width: 170px;
    height: 50%; 
    color: white;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    -webkit-user-select: none;

    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet}{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100px;
        top: 0px;
    }
`

export const Item = styled.div`
    width: 60%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    margin-bottom: 10%;
    padding-left: 15px;
    
    &:hover {
        background-color: #808080;
        border-radius: 5px;
        box-shadow: 5px 5px 10px #a7a7a7;
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: 0.3s ease;
    }

    @media ${device.mobileS},${device.mobileM},${device.mobileL} {
        width: 60%;
        height: 20%;
        margin: 0 auto;
        padding: 0 auto;
        background-color: #808080;
    }
`

export const Title = styled.div`
    display: inline-block;
    color: white;

    @media ${device.mobileS},${device.mobileM},${device.mobileL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`