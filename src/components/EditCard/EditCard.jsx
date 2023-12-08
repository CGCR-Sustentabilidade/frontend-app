import React from "react";
import {
  Screen,
  Card,
  CloseIcon,
  FormStyled,
  DivButton,
} from "./EditCard.styled";
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
  handleCloseModal,
  onChange,
  submit,
}) => {
  return (
    <Screen>
      <Card>
        <CloseIcon src={xSolid} onClick={handleCloseModal} alt='x image'/>
        <h3>{title}</h3>
        <FormStyled onSubmit={submit}>
          <Input
            placeholder={placeholder1}
            label={label1}
            type={type1}
            name={name1}
            onChange={onChange}
          />
          <Input
            placeholder={placeholder2}
            label={label2}
            type={type2}
            name={name2}
            onChange={onChange}
          />
          <Input
            placeholder={placeholder3}
            label={label3}
            type={type3}
            name={name3}
            onChange={onChange}
          />
          <Input
            placeholder={placeholder4}
            label={label4}
            type={type4}
            name={name4}
            onChange={onChange}
          />
          <Input
            placeholder={placeholder5}
            label={label5}
            type={type5}
            name={name5}
            onChange={onChange}
          />
          <Input
            placeholder={placeholder6}
            label={label6}
            type={type6}
            name={name6}
            onChange={onChange}
          />
          <DivButton>
            <Button title="Salvar" id="Form" onClick={() => submit} />
          </DivButton>
        </FormStyled>
      </Card>
    </Screen>
  );
};

export default EditCard;
