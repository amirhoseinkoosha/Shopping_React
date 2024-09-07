import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css";
export default function Header() {
  return (
    <header>
      <Navbar className="nav-bg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>FC Market</Navbar.Brand>
          </LinkContainer>
          <Nav className="navlink">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>
                <i className="fa fa-user"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
