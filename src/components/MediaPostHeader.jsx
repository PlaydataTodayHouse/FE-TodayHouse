import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
const MediaPostHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: "10" }}>
        <Navbar
          color="white"
          light
          expand="lg"
          style={{
            height: "81px",
            borderBottom: "1px solid #EAEDEF",
          }}
        >
          <div
            className="container-fluid"
            style={{
              display: "flex",
              margin: "0 108.500px 0 108.500px",
              padding: "10px 60px 10px 60px",
            }}
          >
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <NavbarBrand
                style={{
                  margin: "-4px",
                  padding: "4px",
                  marginRight: "45px",
                  float: "left",
                }}
              >
                <Link to="/">
                  <svg
                    className="css-1qa5cvy"
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="30"
                    fill="none"
                    viewBox="0 0 74 30"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M14.2 25.17H9.28V20.7a1.45 1.45 0 00-2.9 0v4.47H1.44a1.45 1.45 0 100 2.9H14.2a1.45 1.45 0 000-2.9zM4.5 9.15c0-4.6 2.08-5.28 3.33-5.28 1.24 0 3.33.69 3.33 5.28v.36c0 4.6-2.09 5.28-3.33 5.28-1.25 0-3.34-.69-3.34-5.28v-.36zm3.33 8.54c3.84 0 6.23-3.13 6.23-8.18v-.36c0-5.05-2.39-8.18-6.23-8.18-3.85 0-6.24 3.13-6.24 8.18v.36c0 5.05 2.39 8.18 6.24 8.18zM33.37 10.35H17.81a1.45 1.45 0 000 2.9h15.56a1.45 1.45 0 100-2.9zM31.82 25.84c-7.08 1.84-9.45.8-10.14.26-.45-.35-.65-.8-.65-1.48v-.87h10.25c.8 0 1.46-.65 1.46-1.45v-5.08c0-.8-.65-1.45-1.46-1.45h-11.7a1.45 1.45 0 100 2.9h10.25v2.18H19.57c-.8 0-1.45.65-1.45 1.45v2.32a4.6 4.6 0 001.78 3.78c1.2.92 2.94 1.39 5.21 1.39 2.05 0 4.54-.38 7.44-1.13a1.45 1.45 0 10-.73-2.82zM20.3 7.83h10.82a1.45 1.45 0 100-2.9h-9.36V1.44a1.45 1.45 0 10-2.9 0v4.93c0 .8.65 1.45 1.45 1.45z"
                      clip-rule="evenodd"
                      className=""
                    ></path>
                    <rect
                      width="3"
                      height="15"
                      x="70"
                      fill="currentColor"
                      rx="1.5"
                      className=""
                    ></rect>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M64.5 13.28a1.45 1.45 0 002.73-1c-.05-.13-1-2.68-3.38-4.5l3.7-4.1a1.45 1.45 0 00-1.09-2.42h-9.05a1.45 1.45 0 100 2.9h5.8l-6.88 7.64a1.45 1.45 0 102.16 1.95l3.41-3.8a8.02 8.02 0 012.6 3.33zM69.56 26.52h-7.01a.82.82 0 01-.82-.82v-1.95h8.65v1.95c0 .45-.37.82-.82.82zm2.27-9.37c-.8 0-1.45.65-1.45 1.45v2.25h-8.65V18.6a1.45 1.45 0 10-2.9 0v7.1a3.72 3.72 0 003.72 3.72h7.01a3.72 3.72 0 003.72-3.72v-7.1c0-.8-.65-1.45-1.45-1.45zM42.46 3.87c2.22 0 2.33 4.24 2.33 5.08 0 .85-.11 5.09-2.33 5.09-2.21 0-2.32-4.24-2.32-5.09 0-.84.11-5.08 2.32-5.08zm0 13.07c1.76 0 3.23-.93 4.14-2.62.71-1.34 1.1-3.2 1.1-5.37 0-2.16-.39-4.02-1.1-5.36A4.59 4.59 0 0042.46.97c-1.75 0-3.22.93-4.13 2.62-.72 1.34-1.1 3.2-1.1 5.36 0 2.17.38 4.03 1.1 5.37a4.59 4.59 0 004.13 2.62z"
                      clip-rule="evenodd"
                      className=""
                    ></path>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M51.4.49c-.8 0-1.45.65-1.45 1.45v17.78c-1.93.6-5.75 1.12-10.38 1.12h-2.2a1.45 1.45 0 000 2.91h2.2c2.64 0 7.21-.23 10.38-1.02v4.84a1.45 1.45 0 002.9 0V1.94c0-.8-.65-1.45-1.45-1.45z"
                      clip-rule="evenodd"
                      className=""
                    ></path>
                  </svg>
                </Link>
              </NavbarBrand>
              <Nav className="me-auto" navbar>
                <NavItem
                  style={{
                    float: "right",
                    margin: "-4px",
                    padding: "4px",
                    marginLeft: "45px",
                  }}
                >
                  <NavLink href="#">
                    <Button
                      style={{
                        width: "131px",
                        height: "43px",
                        textAlign: "center",
                      }}
                    >
                      올리기
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};
export default MediaPostHeader;
