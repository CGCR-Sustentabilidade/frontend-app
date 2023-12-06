import React from 'react';
import { InputContainer, InputStyled, Label} from './Input.styled';


export const Input = ({placeholder, type, name, label, onChange}) => {
    return (
        <InputContainer >
            <Label>{label}</Label>
            <InputStyled
                placeholder={placeholder}
                type={type}
                name={name}
                autoComplete='off'
                onChange={onChange}
            />
        </InputContainer>
    );
};