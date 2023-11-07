import React from "react"
import { CardDashConteiner, Content, Icon, Title } from "./CardDash.styled"

import elderly from '../../assets/images/elderly.png'

export default _ => {
    return (
        <CardDashConteiner>
            <Icon src={elderly} alt='casal de idosos'/>
            <Title>Total de Idosos</Title>
            <Content>243</Content>
        </CardDashConteiner>
    )
}