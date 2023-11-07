import {Card, Image, IconsDiv, Icons} from "./DetailsCard.styled"
import pencil from "../../assets/icons/pencil.svg"
import trash from "../../assets/icons/trash.svg"

const DetailsCard = ({info1, info2, info3, info4, info5, imgSrc}) => {
    return(
        <Card>
            <Image src={imgSrc} alt="" />
            <span>{info1}</span>
            <span>{info2}</span>
            <span>{info3}</span>
            <span>{info4}</span>
            <span>{info5}</span>
            <IconsDiv>
                <Icons src={pencil} alt="" />
                <Icons src={trash} alt="" />
            </IconsDiv>
        </Card>
    );
};

export default DetailsCard;