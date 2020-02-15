import styled from 'styled-components';
import { color7, color1, color5, color6, color2 } from '../../globalStyle/colorCode';


export const Wrapper = styled.div` 
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
`

export const Card = styled.div`
    width: 70%;
    min-width: 70%;
    height: 250px;
    margin-bottom: 40px;
    border-radius: 15px;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    position: relative;
`


export const ProjectTitle = styled.div`
    height: 20px;
    color: ${color1};
    margin-bottom: 10px;
    font-size: 1.3em;
    font-weight: bold;
    font-style: oblique;
    text-shadow: 2px 2px 13px ${color2};
`

export const ProjectDesc = styled.div`
    height: 50px;
    color: ${color2};
    background-color: ${color1};
    padding: 7px 7px;
    border: 2px solid ${color7};
    text-align: justify;
    font-size: 1.03em;
    font-style: oblique;
    opacity: 0.9;
`

export const Tools = styled.div`
    display: flex;
    flex-direction: row;
`

export const ProjectTools = styled.div`
    color: ${color2};
    font-size: 1em;
    background-color: orange;
    border-radius: 10px;
    margin: 10px 2px;
    padding: 3px 3px;
`

export const ProjectLink = styled.div`
    width: 100%;
    color: ${color6};
    background-color: ${color7};
    font-size: 1em;
    margin-top: 30px;
    padding: 5px 0px 5px 15px;
    border-radius: 10px;
    
    &:hover{
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: 0.3s ease;
        box-shadow: 3px 3px 2px ${color5};
    }
`