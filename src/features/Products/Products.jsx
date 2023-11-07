import React from "react";

import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

import person from '../../assets/icons/person.svg'
import { ProductConteiner } from "./Products.styled";

export default _ => {
    return (
        <ProductConteiner>
            <Header 
                title='Produtos' 
                textButton='Adicionar Produto'
                info1='Nome'
                info2='Email'
                info3='Telefone'
                info4='ID'
                info5='Data de Entrada' 
                isButtonON={true}
            />
            <DetailsCard
                info1='Victor Adriel'
                info2='victoradriel01@gmail.com'
                info3='victoradriel01'
                info4='victoradriel01'
                info5='victoradriel01'
                imgSrc={person}
            />
        </ProductConteiner>
    )
}