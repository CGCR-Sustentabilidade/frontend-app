import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ElderlyConteiner, ElderlyCards } from "./Elderly.styled";
import axios from "axios";

export const ElderlyScreen = () => {
  const [elderlies, setElderlies] = useState([]);
  const currentDate = new Date();

  const fetchElderlies = async () => {
    try {
      const response = await axios.get(
        "https://cgcrsistemainterno.up.railway.app/catalog/list-elderlies"
      );
      setElderlies(response.data);
    } catch (error) {
      console.error("Error fetching elderlies:", error);
    }
  };

  useEffect(() => {
    fetchElderlies();
  }, []);

  const initialState = {
    remedy: {
      _id: '',
      name: "",
      type: "",
      description: "",
      status: "",
    },
  };
  const [values, setValues] = useState(initialState);

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues((prevValues) => ({
      elderlies: {
        ...prevValues.elderlies,
        [name]: value,
      },
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const updatedElderlies = {
      ...values.elderlies,
    };

    try {
      const response = await axios.post(
        "https://cgcrsistemainterno.up.railway.app/catalog/create-elderly",
        { elderlies: updatedElderlies }
      );

      console.log("POST request successful:", response.data);

      setValues(initialState);
      fetchElderlies();
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  return (
    <ElderlyConteiner>
      <ElderlyCards>
        <Header
          headerTitle="Idosos"
          textButton="Adicionar Idoso"
          info1="Nome"
          info2="Descrição"
          info3="Data"
          info4="Tipo"
          info5="Status"          
          title={"Criar Idoso"}
          placeholder1={"Nome"}
          placeholder2={"Contato"}
          placeholder3={"Descrição"}
          placeholder4={"Data de nascimento"}
          placeholder5={"Status"}
          placeholder6={"Tipo"}
          label1={"Nome:"}
          label2={"Contato:"}
          label3={"Descrição:"}
          label4={"Data de nascimento:"}
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
       {elderlies.map((elderlies, index) => (
          <DetailsCard
            key={index}
            info1={elderlies.name}
            info2={elderlies.description}
            info3={elderlies.Date}
            info4={elderlies.type}
            info5={elderlies.status}
            title={'Editar Idoso'}
            placeholder1={"Nome"}
            placeholder2={"Contato"}
            placeholder3={"Descrição"}
            placeholder4={"Data de nascimento"}
            placeholder5={"Status"}
            placeholder6={"Tipo"}
            label1={"Nome:"}
            label2={"Contato:"}
            label3={"Descrição:"}
            label4={"Data de nascimento:"}
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
            url={'https://cgcrsistemainterno.up.railway.app/catalog/delete-elderly/'}
            deleteId={elderlies._id}
          />
        ))}
      </ElderlyCards>
    </ElderlyConteiner>
  );
};
