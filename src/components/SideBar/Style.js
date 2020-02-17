import styled from 'styled-components';
import { device } from '../../globalStyle/devices';

export const SideMenu = styled.div`
    width: 20%;
    min-width: 20%;
    height: 50%; 
    position: fixed;
    top: 25%;
    left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
    -webkit-user-select: none;

    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet}{
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        height: 15vh;
        top: 0px;
        left: 0px;
    }
`

export const SideItem = styled.div`
    width: 60%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    
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
        flex-direction: row;
        align-items: center;
        width: 15%;
        height: 100%;
        // margin: 0px auto;
    }
`

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    
    @media ${device.mobileS},${device.mobileM},${device.mobileL} {
        flex-direction: column;
    }
`

export const Title = styled.p`
    font-size: 16px;
    padding-left: 15px;
    font-family: "Times New Roman", Times, serif;
    @media ${device.mobileS},${device.mobileM},${device.mobileL} {
        padding: 0px;
        font-size: 17px;
    }
`