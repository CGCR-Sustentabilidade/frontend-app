import React from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ElderlyConteiner, ElderlyCards } from "./Elderly.styled";

export const ElderlyScreen = () => {

    const elderlyList = [
        {
          info1: "Victor Adriel",
          info2: "victoradriel01@gmail.com",
          info3: "(31) 111111111",
          info4: "01",
          info5: "Regular",
        },
        {
          info1: "Ana Carolina",
          info2: "anacarolina@gmail.com",
          info3: "(31) 111111111",
          info4: "02",
          info5: "Regular",
        },
        {
          info1: "Maria",
          info2: "mariaa@gmail.com",
          info3: "(31) 111111111",
          info4: "03",
          info5: "Regular",
        },
      ];

  return (
    <ElderlyConteiner>
      <ElderlyCards>
        <Header
          title="Idosos"
          textButton="Adicionar Idoso"
          info1="Nome"
          info2="Email"
          info3="Telefone"
          info4="ID"
          info5="Status"
        />
       {elderlyList.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.info1}
            info2={medicine.info2}
            info3={medicine.info3}
            info4={medicine.info4}
            info5={medicine.info5}
            imgSrc={person}
            title={'Editar Idoso'}
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
      </ElderlyCards>
    </ElderlyConteiner>
  );
};
