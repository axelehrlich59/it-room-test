import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  align-items: center;
  border-bottom: 1px solid brown;
`

export const NavbarButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 50px;
  border: 1px solid blue;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
  }

  li {
    list-style-type: none;
  }
` 