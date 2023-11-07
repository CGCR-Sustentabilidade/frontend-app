import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 14px;
    cursor: pointer;

    &.SideBar {
        width: 193px;
        height: 41px;
        color: #000;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:20px;
    }

    &.SideBar:focus{
        background-color: #FEAF00;
    }

    &.SideBar:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`;

export default StyledButton;

export const ButtonContainer = styled.div`
    display: flex;
    min-width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    width: 17px;
    margin: 0;
    
`;