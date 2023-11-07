import styled from 'styled-components';

const StyledButton = styled.button`
    color: #000;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.SideBar {
        width: 193px;
        height: 41px;
        background-color: transparent;
        gap:20px;
    }

    &.SideBar:focus{
        background-color: #FEAF00;
    }

    &.SideBar:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    &.Save {
        width: 150px;
        height: 41px;
        background-color: #FEAF00;
        flex-direction: column;        
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