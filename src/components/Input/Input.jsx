import React from 'react';
import { InputContainer, InputStyled, Label} from './Input.styled';


export const Input = ({placeholder, type, register, label, isError}) => {
    return (
        <InputContainer isError={isError}>
            <Label>{label}</Label>
            <InputStyled
                placeholder={placeholder}
                type={type}
                {...register}
                autoComplete='off'
            />
        </InputContainer>
    );
};