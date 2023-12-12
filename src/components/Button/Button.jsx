import React from 'react';
import StyledButton, {ButtonContainer, Icon} from './Button.styled';

const Button = ({title, type, id, onClick, icon}) => {
    return (
        <ButtonContainer>
            <StyledButton
                className={`${id}`}
                type= {type || 'submit'}
                id={id}
                onClick={onClick}
                
            >
            <Icon data-testid='icon' src={icon}/>
                {title}
            </StyledButton>
        </ButtonContainer>
    );
};

export default Button;