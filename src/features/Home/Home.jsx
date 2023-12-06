import React, { useState, useEffect } from "react";
import CardDash from "../../components/CardDashboard/CardDash";
import { DivD } from "./Home.styled";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [elderlies, setElderlies] = useState([]);

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
    fetchProducts();
    fetchMedicines();
    fetchElderlies();
  }, []);

  return (
    <DivD>
      <CardDash title={"Idosos"} content={elderlies.length} />
      <CardDash title={"Medicamentos"} content={medicines.length} />
      <CardDash title={"Produtos"} content={products.length} />
    </DivD>
  );
};

export default Home;
