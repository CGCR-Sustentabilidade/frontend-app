import React from "react";
import CardDash from "../../components/CardDashboard/CardDash";
import { DashboardConteiner } from "./Dashboard.styled";
import Header from "../../components/Header/Header";
import person from '../../assets/icons/person.svg'
export default () => {
    return (
        <DashboardConteiner>
            <Header title='Dashboard' isButtonON={false}/>
            <CardDash 
                srcImg={person} 
                altImg='Icone de uma pessoa'
                title='Total de Idosos'
                content='148'
                backgroundColor='#f2eae1'/>
        </DashboardConteiner>
    )
}