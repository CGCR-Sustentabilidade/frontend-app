import React from "react"
import { CardDashConteiner, Content, Icon, Title } from "./CardDash.styled"

const CardDash = ({ srcImg, altImg, title, content, backgroundColor }) => {
    const cardContainerStyle = {
        backgroundColor: backgroundColor
    };

    return (
        <CardDashConteiner style={cardContainerStyle} data-testid='card-dash-container'>
            <Icon src={srcImg} alt={altImg} />
            <Title>{title}</Title>
            <Content>{content}</Content>
        </CardDashConteiner>
    )
}

export default CardDash;