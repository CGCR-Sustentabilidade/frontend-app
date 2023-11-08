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
import inboxSolid from "../../assets/icons/inboxSolid.svg";
import cartshopping from "../../assets/icons/cartshopping.svg";

export const SideBar = ({ name, office }) => {

//   const handleClick = () => {
//     getData() {    
//         // create a new XMLHttpRequest    
//         var xhr = new XMLHttpRequest() 

//         // get a callback when the server responds   
//         xhr.addEventListener('load', () => {      
//             // update the state of the component with the result here      
//             console.log(xhr.responseText)    })   
//              // open the request with the verb and the url 
//             xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')   
//                 // send the request    
//                 xhr.send()  
//     }
//   };

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
        //   onClick={handleClick}
        />
      </Link>

      <Link to="/">
        <Button title={"Relatórios"} id={"SideBar"} icon={inboxSolid} />
      </Link>
    </SideBarConteiner>
  );
};

export default SideBar;
