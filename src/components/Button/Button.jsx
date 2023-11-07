import React from 'react';
import StyledButton, {ButtonContainer} from './Button.styled';

const Button = ({title, type, id, onClick}) => {
    return (
        <ButtonContainer>
            <StyledButton
                className={`${id}`}
                type={type}
                id={id}
                onClick={onClick}
            >
                {title}
            </StyledButton>
        </ButtonContainer>
    );
};

export default Button;