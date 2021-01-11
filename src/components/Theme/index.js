import React from 'react';
import { Wrapper, ElementWrapper, Element, Label } from './styled';
import { GlobalStyles } from '../../assets/fonts';
import { purpleColor, aquaColor, grayColor } from './constants';

const colors = {
    "purple": purpleColor,
    "aqua": aquaColor,
    "gray": grayColor
};

export const Theme = (props) => (
    <React.Fragment>
        <GlobalStyles/>
        <Wrapper>
            {Object.keys(colors[props.color]).map((obj, index) => 
                <ElementWrapper key={index}>
                    <Element color={colors[props.color][obj]} />
                    <Label>{`${obj} (${colors[props.color][obj]})`}</Label>
                </ElementWrapper>
            )}
        </Wrapper>
    </React.Fragment>
);