import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 32px 16px;
`;

export const Element = styled.div`
    background: ${props => props.color ? props.color : '#000000'};
    width: 40px;
    height: 40px;
    margin: 0 0 8px;
    border-radius: 8px;
`;

export const Label = styled.label`
    font-family: Arial;
    font-weight: bold;
    font-size: 14px;
`;