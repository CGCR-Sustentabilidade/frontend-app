import React from 'react';
import {IconStyled, InputContainer, InputStyled} from './Input.styled';

import lock from '../../assets/icons/lock.svg';
import person from '../../assets/icons/person.svg';

export const Input = ({placeholder, type, register, isError}) => {
    return (
        <InputContainer isError={isError}>
            <InputStyled
                placeholder={placeholder}
                type={type}
                {...register}
                autoComplete='off'
            />
            <IconStyled src={type === 'password' ? lock : person} />
        </InputContainer>
    );
};