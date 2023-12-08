import { useState } from "react";
import {
  DetailsCardStyled,
  IconsDiv,
  Icons,
} from "./DetailsCard.styled";
import pencil from "../../assets/icons/pencil.svg";
import trash from "../../assets/icons/trash.svg";
import EditCard from "../EditCard/EditCard";
import axios from "axios";

const DetailsCard = ({
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
  url,
  deleteId,
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

    axios.post(url + deleteId)
    .then((response) => {
      setIsDetailsCard(false);
    });
  };

  return (
    <>
      {isDetailsCard && (
        <DetailsCardStyled>
          <span>{info1}</span>
          <span>{info2}</span>
          <span>{info3}</span>
          <span>{info4}</span>
          <span>{info5}</span>
          <span>{info6}</span>
          <IconsDiv>
            <Icons src={pencil} alt="pencil icon" onClick={handleOpenModal} />
            <Icons src={trash} alt="" onClick={handleDelete} />
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
    </>
  );
};

export default DetailsCard;
