import React from "react"
import { Button, Div, HeaderConteiner, HorizontalLine, InfoDiv, Spacer, Title } from "./Header.styled"

export default ({title, textButton, info1, info2, info3, info4, info5, isButtonON}) => {
    console.log(isButtonON)

    return (
        <HeaderConteiner>
            <Div>
                <Title>{title}</Title>
                {isButtonON && <Button>{textButton}</Button>}
            </Div>
            <HorizontalLine></HorizontalLine>
            <InfoDiv>
                <Spacer></Spacer>
                <span>{info1}</span>
                <span>{info2}</span>
                <span>{info3}</span>
                <span>{info4}</span>
                <span>{info5}</span>
            </InfoDiv>
        </HeaderConteiner>
    )
}