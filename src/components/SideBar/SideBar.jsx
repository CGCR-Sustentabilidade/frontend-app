import  Button from "../Button/Button";
import {SideBarConteiner, Title, UserDiv, Name, Office, UserImage} from "./SideBar.styled"

import userSolid from "../../assets/icons/userSolid.svg";
import houseSolid from "../../assets/icons/houseSolid.svg";
import pillsSolid from "../../assets/icons/pillsSolid.svg";
import inboxSolid from "../../assets/icons/inboxSolid.svg";
import cartshopping from "../../assets/icons/cartshopping.svg";

export const SideBar = ({name, office}) => {
    return(
        <SideBarConteiner>
            <Title>CGCR</Title>
            <UserDiv>
                <UserImage src={userSolid} alt="User" />
                <Name>{name}</Name>
                <Office>{office}</Office>
            </UserDiv>
            <Button title={"Home"} id={'SideBar'} icon={houseSolid}/>
            <Button title={"Idosos"} id={'SideBar'} icon={userSolid}/>
            <Button title={"Medicamentos"} id={'SideBar'} icon={pillsSolid}/>
            <Button title={"Produtos"} id={'SideBar'} icon={cartshopping}/>
            <Button title={"Relatórios"} id={'SideBar'} icon={inboxSolid}/>
        </SideBarConteiner>
    );

} 

export default SideBar;