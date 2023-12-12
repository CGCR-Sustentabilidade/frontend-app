import styled from 'styled-components';

export const SideBarConteiner = styled.div`
    max-width: 250px ;
    min-width: 250px;
    height: 100vh;
    background-color: #F2EAE1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    & a {
        text-decoration: none
    }

    & a button {
        justify-content: start;
        padding: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin:0;
    padding: 18px 25px 27px 37px;
`;

export const UserDiv = styled.div`
    margin-bottom: 40px ;
`;

export const Name = styled.p`
    color: #000;
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
`;

export const Office = styled.p`
    color: #FEAF00;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
`;

export const UserImage = styled.img`
    width: 55px;
`;  