import styled from "styled-components";

export const DetailsCardStyled = styled.div`
  width: 100%;
  height: 85px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
  align-items: center;
  background-color: #fff;
  text-align: start;
  margin-bottom: 10px;
  padding: 3px 16px;
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
