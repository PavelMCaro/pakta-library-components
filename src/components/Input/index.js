import React, { useState } from 'react';
import { InputWrapper, InputStyled, Label } from './styled';
import { GlobalStyles } from '../../assets/fonts';

export const Input = ({ placeholder, onBlur }) => {

    const [ active, setActive ] = useState(false);

    const handleBlur = (e) => {
        const { value } = e.target;
        if (value.length === 0) {
          setActive(false);
        }
        onBlur && onBlur();
    };

    return (
        <InputWrapper>
            <GlobalStyles />
            <InputStyled
                onFocus={() => setActive(true)}
                onBlur={e => handleBlur(e)}
                placeholder={!active ? placeholder : ''}
            />
            {active && <Label active={active}>{placeholder}</Label>}
        </InputWrapper>
    )
};

Input.defaultProps = {
    placeholder: "Ingrese texto aquí"
}