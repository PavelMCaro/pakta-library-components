import React from 'react';
import { Wrapper, ElementWrapper, Element, Label } from './styled';

const purpleUI = [
    {
        label: 'purple01',
        value: '#783CDC'
    },
    {
        label: 'purple02',
        value: '#995BFF'
    },
    {
        label: 'purple03',
        value: '#937AF8'
    },
    {
        label: 'purple04',
        value: '#E4D8F8'
    },
    {
        label: 'purple05',
        value: '#F9F5FF'
    }
];

const aquaUI = [
    {
        label: 'aqua01',
        value: '#20D0C6'
    },
    {
        label: 'aqua02',
        value: '#51E6CA'
    },
    {
        label: 'aqua03',
        value: '#E9FCF8'
    },
    {
        label: 'aqua04',
        value: '#89E0D0'
    }
];

export const Theme = () => (
    <Wrapper>
        {purpleUI.map((obj, index) =>
            <ElementWrapper key={index}>
                <Element color={obj.value} />
                <Label>{obj.value}</Label>
            </ElementWrapper>
        )}
        {aquaUI.map((obj, index) =>
            <ElementWrapper key={index}>
                <Element color={obj.value} />
                <Label>{obj.value}</Label>
            </ElementWrapper>
        )}
    </Wrapper>
)