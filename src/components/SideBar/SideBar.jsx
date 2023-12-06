import Button from "../Button/Button";
import {
  SideBarConteiner,
  Title,
  UserDiv,
  Name,
  Office,
  UserImage,
} from "./SideBar.styled";

import { Link } from "react-router-dom";

import userSolid from "../../assets/icons/userSolid.svg";
import houseSolid from "../../assets/icons/houseSolid.svg";
import pillsSolid from "../../assets/icons/pillsSolid.svg";
import cartshopping from "../../assets/icons/cartshopping.svg";

export const SideBar = ({ name, office }) => {
  return (
    <SideBarConteiner id="sideBar">
      <Title>CGCR</Title>
      <UserDiv>
        <UserImage src={userSolid} alt="User" />
        <Name>{name}</Name>
        <Office>{office}</Office>
      </UserDiv>

      <Link to="/">
        <Button title={"Home"} id={"SideBar"} icon={houseSolid} />
      </Link>

      <Link to="/idosos">
        <Button title={"Idosos"} id={"SideBar"} icon={userSolid} />
      </Link>

      <Link to="/medicamentos">
        <Button title={"Medicamentos"} id={"SideBar"} icon={pillsSolid} />
      </Link>

      <Link to="/produtos">
        <Button
          title={"Produtos"}
          id={"SideBar"}
          icon={cartshopping}
        />
      </Link>

      {/* <Link to="/">
        <Button title={"Relatórios"} id={"SideBar"} icon={inboxSolid} />
      </Link> */}
    </SideBarConteiner>
  );
};

export default SideBar;
