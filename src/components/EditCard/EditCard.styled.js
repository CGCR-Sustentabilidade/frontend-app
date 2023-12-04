import styled from "styled-components";

export const Screen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: white;
  padding: 0;
  border-radius: 8px;
  position: relative;
  width: 550px;
  height: 650px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0px;
  align-self: flex-end;
  width: 40%;
`;

export const CloseIcon = styled.img`
  width: 12px;
  align-self: end;
  margin: 12px 15px 0px 0px;
  cursor: pointer;
`;
