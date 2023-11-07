import React from "react";

import Header from "../../components/Header/Header";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

import person from '../../assets/icons/person.svg'
import { ElderlyConteiner } from "./Elderly.styled";

export default _ => {
    return (
        <ElderlyConteiner>
            <Header 
                title='Idosos' 
                textButton='Adicionar Idoso'
                info1='Nome'
                info2='Email'
                info3='Telefone'
                info4='ID'
                info5='Data de Entrada' 
                isButtonOn={true}
            />
            <DetailsCard
                info1='Victor Adriel'
                info2='victoradriel01@gmail.com'
                info3='victoradriel01'
                info4='victoradriel01'
                info5='victoradriel01'
                imgSrc={person}
            />
        </ElderlyConteiner>
    )
}