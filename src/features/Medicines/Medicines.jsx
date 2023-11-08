import React from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { MedicineConteiner, MedicineScreen } from "./Medicines.styled";

export const MedicinesScreen = () => {

    const medicinesList = [
        {
          info1: "Test",
          info2: "Test",
          info3: "05/03/2025",
          info4: "50",
          info5: "Disponível",
        },
        {
          info1: "Test",
          info2: "Test",
          info3: "15/06/2026",
          info4: "100",
          info5: "Disponível",
        },
      ];
      
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
        {medicinesList.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.info1}
            info2={medicine.info2}
            info3={medicine.info3}
            info4={medicine.info4}
            info5={medicine.info5}
            imgSrc={person}
            title={'Editar Medicamento'}
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
