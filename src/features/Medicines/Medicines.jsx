import React from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import SideBar from "../../components/SideBar/SideBar";

import person from "../../assets/icons/person.svg";
import { MedicineConteiner, MedicineScreen } from "./Medicines.styled";

const medicinesList = [
  {
    info1: "Victor Adriel",
    info2: "victoradriel01@gmail.com",
    info3: "victoradriel01",
    info4: "victoradriel01",
    info5: "victoradriel01",
  },
  {
    info1: "Victor Adriel",
    info2: "victoradriel01@gmail.com",
    info3: "victoradriel01",
    info4: "victoradriel01",
    info5: "victoradriel01",
  },
];

export const MedicinesScreen = () => {
  return (
    <MedicineScreen>
      <SideBar />
      <MedicineConteiner>
        <Header
          title="Medicamentos"
          textButton="Adicionar Medicamento"
          info1="Nome"
          info2="Email"
          info3="Telefone"
          info4="ID"
          info5="Data de Entrada"
        />
        {medicinesList.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.info1}
            info2={medicine.info2}
            info3={medicine.info3}
            info4={medicine.info4}
            info5={medicine.info5}
            imgSrc={person}
            title={'Teste'}
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
          />
        ))}
      </MedicineConteiner>
    </MedicineScreen>
  );
};

export default MedicinesScreen;
