import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import person from "../../assets/icons/person.svg";
import { ProductsList, ProductsConteiner } from "./Products.styled";
import axios from "axios";

export const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const currentDate = new Date();
  console.log(currentDate)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://cgcrsistemainterno.up.railway.app/catalog/list-products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const initialState = {
    product: {
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
      product: {
        ...prevValues.product,
        [name]: value,
      },
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...values.product,
    };

    try {
      const response = await axios.post(
        "https://cgcrsistemainterno.up.railway.app/catalog/create-product",
        { product: updatedProduct }
      );

      console.log("POST request successful:", response.data);

      setValues(initialState);
      fetchProducts();
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  return (
    <ProductsList>
      <ProductsConteiner>
        <Header
          headerTitle="Produtos"
          info1={"Nome"}
          info2={"Marca"}
          info3={"Descrição"}
          info4={"Data de validade"}
          info5={"Status"}
          info6={"Tipo"}
          textButton="Adicionar Produto"
          title={"Criar Produto"}
          placeholder1={"Nome do produto"}
          placeholder2={"Marca do produto"}
          placeholder3={"Descrição do produto"}
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
        {products?.map((product, index) => (
          <DetailsCard
            key={index}
            info1={product.name}
            info2={product.brand}
            info3={product.description}
            info5={product.expiration_date}
            info4={product.status}
            info6={product.type}
            title={"Editar Produto"}
            placeholder1={"Nome do produto"}
            placeholder2={"Marca do produto"}
            placeholder3={"Descrição do produto"}
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
            url={
              "https://cgcrsistemainterno.up.railway.app/catalog/delete-product/:"
            }
            deleteId={product._id}
          />
        ))}
      </ProductsConteiner>
    </ProductsList>
  );
};
