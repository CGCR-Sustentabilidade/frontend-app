import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ElderlyConteiner, ElderlyCards } from "./Elderly.styled";
import axios from "axios";

export const ElderlyScreen = () => {
  const initialState = {
    name: "1_nome_do_remédio",
    brand: "marca_do_remédio",
    description: "descrição do remédio",
    quantity: 10,
    expiration_date: "2006-08-05T18:05:15.000Z",
  };

  const [values, setValues] = useState(initialState);
  const [elderlies, setElderlies] = useState([]);

  useEffect(() => {
    const params = {};

    axios
      .get("https://cgcrsistemainterno.up.railway.app/catalog/list-elderlies", {
        params,
      })
      .then((response) => {
        setElderlies(response.data);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    axios.post(
      "https://cgcrsistemainterno.up.railway.app/catalog/create-elderly",
      values
    );
  };

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
       {elderlies.map((medicine, index) => (
          <DetailsCard
            key={index}
            info1={medicine.name}
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
            name1={'name1'}
            name2={'name2'}
            name3={'name3'}
            name4={'name4'}
            name5={'name5'}
            onChange={onChange}
            submit={submit}
            itemId={index}
            url={'https://cgcrsistemainterno.up.railway.app/catalog/delete-elderly/'}
          />
        ))}
      </ElderlyCards>
    </ElderlyConteiner>
  );
};
