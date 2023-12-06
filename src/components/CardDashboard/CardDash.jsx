import React from "react"
import { CardDashConteiner, Content, Icon, Title } from "./CardDash.styled"

const CardDash = ({srcImg, altImg, title, content, backgroundColor}) => {
    return (
        <CardDashConteiner backgroundColor={backgroundColor}>
            <Icon src={srcImg} alt={altImg}/>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </CardDashConteiner>
    )
}

export default CardDash;