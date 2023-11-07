import styled from "styled-components";


export const HeaderConteiner = styled.div`
    width: 100%;
    min-width: 1250px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box; 
    justify-content: center;
    text-align: start;
`;

export const InfoDiv = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 60px;
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr 2fr;
    align-items: center;
    justify-content: space-around;
    color: #ACACAC;
    font-size: 12px;
    font-weight: 600;
    
`;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Button = styled.button`
    width: 199px;
    height: 44px;
    border-radius: 4px;
    background: #FEAF00;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    border: none;

    &:hover {
        background-color: #ffb619;
    }

    &:active {
        background-color: #e29b00;
    }
`;

export const HorizontalLine = styled.hr`
    width: 100%;
    min-width: 1250px;
    backgrpund-color: pink;
    margin: 0;
`;

export const Spacer = styled.div``;