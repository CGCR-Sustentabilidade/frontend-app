import styled from 'styled-components';
import {toRem} from '../../utils/convertToRem';

export const InputContainer = styled.div`
    max-width: ${toRem(379)};
    height: ${toRem(60)};
    padding: 0 ${toRem(20)};
    display: inline-flex;
    align-items: center;
    border: 1px solid #ffffff;
    border-width: 2px;
    border-radius: ${toRem(50)};

    &&& {
    border: 2px solid ${props => props.isError ? '#e9b425' : '#ffffff'};
    };    
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background: transparent;
    color: #e0e0e0;

    ::placeholder {
        color: #e0e0e0;
    }
`;

export const IconStyled = styled.img`
    width: ${toRem(20)};
    color: #e0e0e0;
`;

