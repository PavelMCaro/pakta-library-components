import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 16px 16px 0;
    font-family: Gilroy;
`;

export const Element = styled.div`
    background: ${props => props.color ? props.color : '#000000'};
    width: 240px;
    height: 150px;
    margin: 0 0 8px;
    border-radius: 8px;
`;

export const Label = styled.label`
    font-family: Arial;
    font-weight: bold;
    font-size: 14px;
    font-family: Gilroy;
`;