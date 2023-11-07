import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ProductsList, ProductsConteiner } from "./Products.styled";

export const ProductsScreen = () => {
  const productsList = [
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

  return (
    <ProductsList>
        <SideBar />
      <ProductsConteiner>
        <Header
          title="Produtos"
          textButton="Adicionar Produto"
          info1="Nome"
          info2="Email"
          info3="Telefone"
          info4="ID"
          info5="Data de Entrada"
        />
        {productsList.map((product, index) => (
          <DetailsCard
            key={index}
            info1={product.info1}
            info2={product.info2}
            info3={product.info3}
            info4={product.info4}
            info5={product.info5}
            imgSrc={person}
            title={"Teste"}
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
      </ProductsConteiner>
    </ProductsList>
  );
};
