import styled from 'styled-components';
import { color1, color2, color5 } from '../../globalStyle/colorCode';
import { device } from '../../globalStyle/devices';


export const Card = styled.div`
    height: 80%;
    width: 65%;
    position: relative;
    margin: 0 auto;
`

export const Background = styled.div`
    height: 35%;
    width: 100%;
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    background-position: center;
    opacity: 0.3;

    @media ${device.mobileS},${device.mobileM},${device.mobileL}{
        opacity: 1;
    }
`

export const PersonalImage = styled.img`
    src: "${props => props.src}";
    width: 100px;
    height: 100px;
    top: 23%;
    left: 31%;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    &:hover{
        -webkit-transform: scale(1.06);
        -ms-transform: scale(1.06);
        transform: scale(1.06);
        transition: 0.3s ease;
    }
`

export const PersonalDetails = styled.div`
    height: 50%;
    width: 100%;
    position: absolute;
    background-color: ${color1};
    padding-top: 40px;
    text-align: center;
    color: ${color2};
    font-family: "Times New Roman", Times, serif;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Title1 = styled.h1`
    font-size: 1.3em;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: oblique;
    text-shadow: 2px 2px 13px ${color2};
`

export const Title2 = styled.p`
    font-size: 1em;
    margin-bottom: 10px;
`

export const IconShape = styled.div`
    display: inline;
    color: ${color5}
`