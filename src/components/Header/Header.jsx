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

const Header = ({
  headerTitle,
  textButton,
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  title,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  placeholder6,
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  onChange,
  submit,
}) => {
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
        <Title>{headerTitle}</Title>
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
        <span>{info6}</span>
      </InfoDiv>
      {isModalVisible && (
        <EditCard
        handleCloseModal={handleCloseModal}
        title={title}
        placeholder1={placeholder1}
        placeholder2={placeholder2}
        placeholder3={placeholder3}
        placeholder4={placeholder4}
        placeholder5={placeholder5}
        placeholder6={placeholder6}
        label1={label1}
        label2={label2}
        label3={label3}
        label4={label4}
        label5={label5}
        label6={label6}
        type1={type1}
        type2={type2}
        type3={type3}
        type4={type4}
        type5={type5}
        type6={type6}
        name1={name1}
        name2={name2}
        name3={name3}
        name4={name4}
        name5={name5}
        name6={name6}
        onChange={onChange}
        submit={submit}
        />
      )}
    </HeaderConteiner>
  );
};

export default Header;
