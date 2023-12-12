import { useState } from "react";
import {
  DetailsCardStyled,
  Image,
  IconsDiv,
  Icons,
} from "./DetailsCard.styled";
import pencil from "../../assets/icons/pencil.svg";
import trash from "../../assets/icons/trash.svg";
import EditCard from "../EditCard/EditCard";

const DetailsCard = ({
  info1,
  info2,
  info3,
  info4,
  info5,
  imgSrc,
  title,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  label1,
  label2,
  label3,
  label4,
  label5,
  type1,
  type2,
  type3,
  type4,
  type5,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailsCard, setIsDetailsCard] = useState(true);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    setIsDetailsCard(false);
  };

  return (
    <>
      {isDetailsCard && (
        <DetailsCardStyled>
          <Image src={imgSrc} alt="" />
          <span>{info1}</span>
          <span>{info2}</span>
          <span>{info3}</span>
          <span>{info4}</span>
          <span>{info5}</span>
          <IconsDiv>
            <Icons src={pencil} alt="pencil icon" onClick={handleOpenModal} />
            <Icons src={trash} alt="trash icon" onClick={handleDelete} />
          </IconsDiv>
        </DetailsCardStyled>
      )}
      {isModalVisible && (
        <EditCard
          handleCloseModal={handleCloseModal}
          title={title}
          placeholder1={placeholder1}
          placeholder2={placeholder2}
          placeholder3={placeholder3}
          placeholder4={placeholder4}
          placeholder5={placeholder5}
          label1={label1}
          label2={label2}
          label3={label3}
          label4={label4}
          label5={label5}
          type1={type1}
          type2={type2}
          type3={type3}
          type4={type4}
          type5={type5}
        />
      )}
    </>
  );
};

export default DetailsCard;
