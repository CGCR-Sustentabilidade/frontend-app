import styled from 'styled-components';

export const CardDashConteiner = styled.div`
    width: 235px;
    height: 142px;
    padding: 20px 20px ;
    background-color:  #F2EAE1;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #F2EAE1;
    gap: 15px
`;

export const Icon = styled.img`
    width: 60px;
`;

export const Title = styled.span`
    text-align: start;
    font-size: 1.4rem;
    font-weight: bold;
`;

export const Content = styled.span`
    text-align: end;
    font-size: 1.5rem;
    font-weight: bold;
    color:  black;
`;