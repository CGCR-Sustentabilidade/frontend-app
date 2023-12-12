import styled from "styled-components";

export const DetailsCardStyled = styled.div`
  width: 1170px;
  height: 85px;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 2fr 2fr 2fr 2fr;
  align-items: center;
  background-color: #fff;
  text-align: start;
  margin-bottom: 10px;
  border-radius: 15px;
  
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconsDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 24px;
  justify-self: center;
`;

export const Icons = styled.img`
  width: 16px;
  cursor: pointer;
`;
