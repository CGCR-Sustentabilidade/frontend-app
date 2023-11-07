import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 93vh;
  border-radius: 20px;
  background-color: #f2eae1;
  border-radius: 20px;
  background-color: #f2eae1;
  position: fixed; 
  top: 50%; 
  left: 56%; 
  transform: translate(-50%, -50%); 
  z-index: 1000; 
`;

export const CloseIcon = styled.img`
  width: 12px;
  align-self: end;
  margin: 0px 45px;
  cursor: pointer;
`;
