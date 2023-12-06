import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { MedicineConteiner, MedicineScreen } from "./Medicines.styled";
import axios from "axios";

export const MedicinesScreen = () => {
  const [medicines, setMedicines] = useState([]);
  const currentDate = new Date();

  const fetchMedicines = async () => {
    try {
      const response = await axios.get(
        "https://cgcrsistemainterno.up.railway.app/catalog/list-remedies"
      );
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching Medicines:", error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const initialState = {
    remedy: {
      _id: '',
      name: "",
      brand: "",
      type: "",
      description: "",
      expiration_date: currentDate,
      status: "",
    },
  };
  const [values, setValues] = useState(initialState);

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues((prevValues) => ({
      remedy: {
        ...prevValues.remedy,
        [name]: value,
      },
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const updatedRemedy = {
      ...values.remedy,
    };

    try {
      const response = await axios.post(
        "https://cgcrsistemainterno.up.railway.app/catalog/create-remedy",
        { remedy: updatedRemedy }
      );

      console.log("POST request successful:", response.data);

      setValues(initialState);
      fetchMedicines();
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };
  
  return (
    <MedicineScreen>
      <MedicineConteiner>
        <Header
          headerTitle="Medicamentos"
          textButton="Adicionar Medicamento"
          info1="Nome"
          info2="Descrição"
          info3="Validade"
          info4="Quantidade"
          info5="Status"          
          title={"Criar Medicamento"}
          placeholder1={"Nome do medicamento"}
          placeholder2={"Marca do medicamento"}
          placeholder3={"Descrição do medicamento"}
          placeholder4={"Data de validade"}
          placeholder5={"Status"}
          placeholder6={"Tipo"}
          label1={"Nome:"}
          label2={"Marca:"}
          label3={"Descrição:"}
          label4={"Data de validade:"}
          label5={"Status:"}
          label6={"Tipo:"}
          type1={"text"}
          type2={"text"}
          type3={"text"}
          type4={"date"}
          type5={"text"}
          type6={"text"}
          name1={"name"}
          name2={"brand"}
          name3={"description"}
          name4={"expiration_date"}
          name5={"status"}
          name6={"type"}
          onChange={onChange}
          submit={submit}
        />
        {medicines.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.name}
            info2={medicine.brand}
            info3={medicine.description}
            info4={medicine.type}
            info5={medicine.expiration_date}
            info6={medicine.status}
            title={"Editar Medicamento"}
            placeholder1={"Nome do medicamento"}
            placeholder2={"Marca do medicamento"}
            placeholder3={"Descrição do medicamento"}
            placeholder4={"Data de validade"}
            placeholder5={"Status"}
            placeholder6={"Tipo"}
            label1={"Nome:"}
            label2={"Marca:"}
            label3={"Descrição:"}
            label4={"Data de validade:"}
            label5={"Status:"}
            label6={"Tipo:"}
            type1={"text"}
            type2={"text"}
            type3={"text"}
            type4={"date"}
            type5={"text"}
            type6={"text"}
            name1={"name"}
            name2={"brand"}
            name3={"description"}
            name4={"expiration_date"}
            name5={"status"}
            name6={"type"}
            onChange={onChange}
            submit={submit}
            itemId={index}
            url={'https://cgcrsistemainterno.up.railway.app/catalog/delete-remedy/'}
            deleteId={medicine._id}
          />
        ))}
      </MedicineConteiner>
    </MedicineScreen>
  );
};

export default MedicinesScreen;
