import styled from 'styled-components';
import {device} from '../../globalStyle/devices';

export const PortfolioWrapper = styled.div`
    width: 400px;
    min-width: 400px;
    height: 500px;
    min-height: 500px;
    top: 10%;
    right: 10px;
    position:fixed;
    -webkit-user-select: none;

    @media ${device.mobileS},${device.mobileM},${device.mobileL}{
        top: 20%;
        right: -10px;
    }
`
