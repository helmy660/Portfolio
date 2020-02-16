import styled from 'styled-components';
import { device } from './devices';


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    @media ${device.mobileS},${device.mobileM},${device.mobileL},${device.tablet}{
        width: 100vw;
        height: 70vh;
        position: fixed;
        top: 15%;
    }
`