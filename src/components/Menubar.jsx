import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
} from "reactstrap";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="white"
        light
        expand="lg"
        style={{ height: "51px", borderBottom: "1px solid #EAEDEF" }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            margin: "0 120px 0 120px",
            padding: "0 60px 0 60px",
          }}
        >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                홈
              </NavItem>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                추천
              </NavItem>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                #채널
              </NavItem>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                집들이
              </NavItem>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                집사진
              </NavItem>
              <NavItem
                style={{
                  margin: "-4px",
                  padding: "4px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  color: "#424242",
                  fontWeight: "700",
                  marginRight: "22px",
                }}
              >
                노하우
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Menubar;
