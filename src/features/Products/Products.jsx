import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ProductsList, ProductsConteiner } from "./Products.styled";
import axios from "axios";

export const ProductsScreen = () => {
  const initialState = {
    name: "",
    brand: "",
    description: "",
    quantity: 0,
    status: "",
  };

  const [values, setValues] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = {};

    axios.get('https://cgcrsistemainterno.up.railway.app/catalog/list-products', { params })
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    axios.post("https://cgcrsistemainterno.up.railway.app/catalog/create-product", values);
  };

  return (
    <ProductsList>
      <ProductsConteiner>
        <Header
          title="Produtos"
          textButton="Adicionar Produto"
          info1="Nome"
          info2="Descrição"
          info3="Quantidade"
          info4="ID"
          info5="Data de Entrada"
        />
        {products.map((product, index) => (
          <DetailsCard
            key={index}
            info1={product.name}
            info2={product.brand}
            info3={product.description}
            info4={product.quantity}
            info5={product.status}
            title={"Editar Produto"}
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
            url={'https://cgcrsistemainterno.up.railway.app/catalog/delete-product/'}
          />
        ))}
      </ProductsConteiner>
    </ProductsList>
  );
};
