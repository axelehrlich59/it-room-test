import React from "react";
import { NavbarContainer, NavbarButtonsContainer, NavbarButtonItemsContainer } from "./index.style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarButtonsContainer></NavbarButtonsContainer>
      <NavbarButtonsContainer>
        <ul>
          <li>ACCEUIL</li>
          <li>RECHERCHE</li>
        </ul>
      </NavbarButtonsContainer>
    </NavbarContainer>)
}

export default Navbar