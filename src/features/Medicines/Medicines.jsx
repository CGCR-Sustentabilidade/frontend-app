import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { MedicineConteiner, MedicineScreen } from "./Medicines.styled";
import axios from "axios";

export const MedicinesScreen = () => {
  const initialState = {
    name: "1_nome_do_remédio",
    brand: "marca_do_remédio",
    description: "descrição do remédio",
    quantity: 10,
    expiration_date: "2006-08-05T18:05:15.000Z",
  };

  const [values, setValues] = useState(initialState);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const params = {};

    axios
      .get("https://cgcrsistemainterno.up.railway.app/catalog/list-remedies", {
        params,
      })
      .then((response) => {
        setMedicines(response.data);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    axios.post(
      "https://cgcrsistemainterno.up.railway.app/catalog/create-remedy",
      values
    );
  };

  return (
    <MedicineScreen>
      <MedicineConteiner>
        <Header
          title="Medicamentos"
          textButton="Adicionar Medicamento"
          info1="Nome"
          info2="Descrição"
          info3="Validade"
          info4="Quantidade"
          info5="Status"
        />
        {medicines.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.name}
            info2={medicine.brand}
            info3={medicine.description}
            info4={medicine.quantity}
            info5={medicine.expiration_date}
            imgSrc={person}
            title={"Editar Medicamento"}
            placeholder1={"Test"}
            placeholder2={"Test"}
            placeholder3={"Test"}
            placeholder4={"Test"}
            placeholder5={"Test"}
            label1={"Test"}
            label2={"Test"}
            label3={"Test"}
            label4={"Test"}
            label5={"Test"}
            type1={"text"}
            type2={"text"}
            type3={"text"}
            type4={"text"}
            type5={"text"}
            name1={'name1'}
            name2={'name2'}
            name3={'name3'}
            name4={'name4'}
            name5={'name5'}
            onChange={onChange}
            submit={submit}
            itemId={index}
            url={'https://cgcrsistemainterno.up.railway.app/catalog/delete-remedy/'}
          />
        ))}
      </MedicineConteiner>
    </MedicineScreen>
  );
};

export default MedicinesScreen;
