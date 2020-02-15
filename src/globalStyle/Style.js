import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`