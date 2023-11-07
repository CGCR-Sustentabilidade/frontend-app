import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 370px;
    height: 60px;
    padding: 0px 20px;
    display: inline-flex;
    align-items: start;
    border-width: 2px;
    display: flex;
    flex-direction: column;
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 60%;
    border: 1px solid #ACACAC;
    border-radius: 5px;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background: #fff;
    color: #000;
    padding: 8px;

    ::placeholder {
        color: #e0e0e0;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    color: #000;
    margin: 5px;

`;



