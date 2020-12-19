import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled(Container)`
    padding:0px
`;
const Title =styled.h3`
    color:#fff;
    
`
export default function NavbarComponent() {
  return (
    < Wrapper  fluid>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
        <Title> REDUX QUIZE APP</Title>
        </Navbar.Brand>
      </Navbar>
    </Wrapper>
  );
}
