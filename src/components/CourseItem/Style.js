import styled from 'styled-components';
import { color1, color2, color5 } from '../../globalStyle/colorCode';

// export const Wrapper = styled.div` 
//     width: 90%;
//     min-width: 90%;
//     position: relative;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     flex-wrap: nowrap;
// `

export const CourseCard = styled.div`
    width: 100%;
    min-width: 100%;
    height: 350px;
    margin: 0 auto;
`

export const CourseBackground = styled.div`
    height: 50%;
    width: 90%;
    background-image: url("${props => props.src}");
    background-size: cover;
    background-position: center;
`

export const CourseDetails = styled.div`
    height: 35%;
    width: 90%;
    position: absolute;
    background-color: ${color1};
    padding-top: 10px;
    color: ${color2};
    font-family: "Times New Roman", Times, serif;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
`

export const CourseTitle = styled.h1`
    font-size: 1.1em;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: oblique;
    text-shadow: 2px 2px 13px ${color2};
`

export const CourseAuthor = styled.p`
    width: 40%;
    font-size: 1em;
    margin: 0 auto;
    border: 2px solid ${color2};
    background-color: orange;
    border-radius: 12px;
`

export const CourseDuration = styled.p`
    font-size: 1em;
    margin-bottom: 10px;
`

export const IconShape = styled.div`
    display: inline;
    color: ${color5};
`