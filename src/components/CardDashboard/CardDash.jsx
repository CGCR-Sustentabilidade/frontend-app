import React from "react"
import { CardDashConteiner, Content, Icon, Title } from "./CardDash.styled"

export default ({srcImg, altImg, title, content, backgroundColor}) => {
    return (
        <CardDashConteiner backgroundColor={backgroundColor}>
            <Icon src={srcImg} alt={altImg}/>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </CardDashConteiner>
    )
}