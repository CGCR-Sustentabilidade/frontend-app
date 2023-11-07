import React from "react";
import Header from "../Header/Header";
import DetailsCard from "../DetailsCard/DetailsCard";

import person from '../../assets/icons/person.svg'
import { MedicineConteiner } from "./Medicines.styled";

export default _ => {
    return (
        <MedicineConteiner>
            <Header 
                title='Medicamentos' 
                textButton='Adicionar Medicamento'
                info1='Nome'
                info2='Email'
                info3='Telefone'
                info4='ID'
                info5='Data de Entrada' 
            />
            <DetailsCard
                info1='Victor Adriel'
                info2='victoradriel01@gmail.com'
                info3='victoradriel01'
                info4='victoradriel01'
                info5='victoradriel01'
                imgSrc={person}
            />
        </MedicineConteiner>
    )
}