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
} from "reactstrap";
import WriteList from "./WriteList";

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [isWriteListVisible, setIsWriteListVisible] = useState(false);

  const toggleWriteList = () => {
    setIsWriteListVisible(!isWriteListVisible);
  };
  return (
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
              href="#"
              style={{ margin: "-4px", padding: "4px", marginRight: "45px" }}
            >
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
            </NavbarBrand>
            <Nav className="me-auto" navbar>
              <NavItem
                style={{
                  marginTop: "30px",
                  marginBottom: "24px",
                  marginRight: "21px",
                }}
              >
                <NavLink href="#">
                  <span
                    style={{
                      color: "#35C5F0",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "18px" /* 112.5% */,
                      letterSpacing: "-0.3px",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    커뮤니티
                  </span>
                </NavLink>
              </NavItem>
              <NavItem
                style={{
                  marginTop: "30px",
                  marginBottom: "24px",
                  marginRight: "21px",
                }}
              >
                <NavLink href="#">
                  <span
                    style={{
                      color: "#2F3438",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "18px" /* 112.5% */,
                      letterSpacing: "-0.3px",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    쇼핑
                  </span>
                </NavLink>
              </NavItem>
              <NavItem
                style={{
                  marginTop: "30px",
                  marginBottom: "24px",
                  marginRight: "102px",
                }}
              >
                <NavLink href="#">
                  <span
                    style={{
                      color: "#2F3438",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "18px" /* 112.5% */,
                      letterSpacing: "-0.3px",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    이사/시공/생활
                  </span>
                </NavLink>
              </NavItem>
              <NavItem style={{ margin: "auto" }}>
                <div
                  className="d-flex"
                  style={{
                    width: "296px",
                    height: "40px",
                    border: "1px solid #f7f9fa", // 박스 라인 스타일 추가
                    borderRadius: "4px", // 박스의 모서리를 둥글게 만듭니다.
                    padding: "0 14px 0 14px",
                    marginRight: "21px",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      margin: "auto",
                      width: "29px",
                      height: "24px",
                      paddingRight: "6px",
                    }}
                  >
                    <path
                      fill="#828c94"
                      d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="통합검색"
                    aria-label="Search"
                    className="me-2"
                    style={{
                      border: "none", // Input 라인 숨김
                      outline: "none", // 포커스 시 발생하는 테두리 제거
                      width: "90%", // Input 요소를 div에 꽉 차게 설정
                      color: "#f7f9fa",
                    }}
                  />
                </div>
              </NavItem>
              {/*<NavItem style={{ paddingRight: "2px", paddingLeft: "2px" }}>*/}
              {/*  <NavLink href="#">*/}
              {/*    <svg*/}
              {/*      width="23px"*/}
              {/*      height="24px"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*    >*/}
              {/*      <path*/}
              {/*        fill="none"*/}
              {/*        stroke="#000000"*/}
              {/*        stroke-linecap="round"*/}
              {/*        stroke-linejoin="round"*/}
              {/*        stroke-width="1.5"*/}
              {/*        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"*/}
              {/*      />*/}
              {/*    </svg>*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem style={{ paddingRight: "2px", paddingLeft: "2px" }}>*/}
              {/*  <NavLink href="#">*/}
              {/*    <svg*/}
              {/*      width="23px"*/}
              {/*      height="24px"*/}
              {/*      viewBox="0 0 24 24"*/}
              {/*      xmlns="http://www.w3.org/2000/svg"*/}
              {/*    >*/}
              {/*      <path*/}
              {/*        fill="#000000"*/}
              {/*        d="M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298l-.003.01l.001.007l.004.006l.006.004l.007.001h16.964l.007-.001l.006-.004l.004-.006l.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"*/}
              {/*      />*/}
              {/*    </svg>*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              <NavItem
                style={{
                  margin: "auto",
                  paddingRight: "2px",
                  paddingLeft: "2px",
                }}
              >
                <NavLink href="#">
                  <svg
                    width="23px"
                    height="24px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#2f3438"
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </NavLink>
              </NavItem>
              <NavItem style={{ margin: "auto" }}>
                <NavLink href="#">
                  <span
                    style={{
                      color: "#2f3438",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    로그인
                  </span>
                </NavLink>
              </NavItem>
              <NavItem style={{ margin: "auto" }}>
                <NavLink href="#">
                  <span
                    style={{
                      borderLeft: "1px solid #EAEDEF",
                      color: "#2f3438",
                      fontSize: "14px",
                      paddingLeft: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    회원가입
                  </span>
                </NavLink>
              </NavItem>
              <NavItem style={{ margin: "auto" }}>
                <NavLink href="#">
                  <span
                    style={{
                      borderLeft: "1px solid #EAEDEF",
                      color: "#2f3438",
                      fontSize: "14px",
                      paddingLeft: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    고객센터
                  </span>
                </NavLink>
              </NavItem>
              <NavItem style={{ margin: "auto" }}>
                <NavLink href="#">
                  <div
                    style={{
                      display: "flex",
                      width: "92.31px",
                      height: "40px",
                      padding: "11px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6.31px",
                      borderRadius: "4px",
                      background: "#35C5F0",
                      fontSize: "14px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={toggleWriteList}
                  >
                    글쓰기
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="square"
                        d="m14 5l-6.5 7L1 5"
                      />
                    </svg>
                  </div>
                  {isWriteListVisible && <WriteList />}
                  {/*</div>*/}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyHeader;
