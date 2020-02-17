import styled from 'styled-components';
import { color1, color7, color2 } from '../../globalStyle/colorCode';

// export const Wrapper = styled.div` 
//     width: 80%;
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     flex-wrap: nowrap;
// `

export const SkillCard = styled.div`
    width: 70%;
    min-width: 70%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 15px;
    background-color: ${color1};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 8px;
    position: relative;
    &:hover{
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: 0.3s ease;
        box-shadow: 3px 3px 3px ${color7};
    }
`

export const SkillImage = styled.img`
    src: "${props => props.src}";
    border-radius: 50%;
    height: 80px;
    width: 80px;
`

export const SkillDetails = styled.div`
    margin-left: 20px;   
`

export const SkillTitle = styled.div`
    color: ${color2};
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const SkillStars = styled.div`
    color: ${color7};
    font-size: 13px;
`