import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    width: 320px;
    font-family: Gilroy;
`;

export const InputStyled = styled.input`
    background: #FFFFFF;
    box-sizing: border-box;
    padding: 20px 16px;
    color: #22193A;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.4px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #E0DEE3;
    margin: 0;
    outline: none;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    width: 100%;
    font-family: Gilroy;
`;

export const Label = styled.label`
    position: absolute;
    left: 16px;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out;
    font-size: 16px;
  ${(props) => props.active && css`
        top: 4px;
        font-size: 12px;
        color: #7A7589;
  ` }
`;