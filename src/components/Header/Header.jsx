import React, { useState } from "react";
import {
  Button,
  Div,
  HeaderConteiner,
  HorizontalLine,
  InfoDiv,
  Spacer,
  Title,
} from "./Header.styled";
import EditCard from "../EditCard/EditCard";

const Header = ({ title, textButton, info1, info2, info3, info4, info5 }) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <HeaderConteiner>
      <Div>
        <Title>{title}</Title>
        <Button onClick={handleOpenModal}>{textButton}</Button>
      </Div>
      <HorizontalLine></HorizontalLine>
      <InfoDiv>
        <Spacer></Spacer>
        <span>{info1}</span>
        <span>{info2}</span>
        <span>{info3}</span>
        <span>{info4}</span>
        <span>{info5}</span>
      </InfoDiv>
      {isModalVisible && (
        <EditCard handleCloseModal={handleCloseModal} title={title} />
      )}
    </HeaderConteiner>
  );
};

export default Header;