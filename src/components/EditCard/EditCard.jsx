import { Screen, Card, CloseIcon } from "./EditCard.styled";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import xSolid from "../../assets/icons/xSolid.svg";

export const EditCard = ({
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
  handleCloseModal,
}) => {
  return (
    <Screen>
      {/* {isModalVisible && ( */}
      <Card>
        <CloseIcon src={xSolid} onClick={handleCloseModal} />
        <h3>{title}</h3>
        <Input placeholder={placeholder1} label={label1} type={type1} />
        <Input placeholder={placeholder2} label={label2} type={type2} />
        <Input placeholder={placeholder3} label={label3} type={type3} />
        <Input placeholder={placeholder4} label={label4} type={type4} />
        <Input placeholder={placeholder5} label={label5} type={type5} />
        <Button title={"Salvar"} id={"Save"} />
      </Card>
      {/* )} */}
    </Screen>
  );
};

export default EditCard;
