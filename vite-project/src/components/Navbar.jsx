import React from "react";
import { Container, Nav, Navbar as NavbarBoot } from "react-bootstrap";
import arrowDown from "../assets/icons/arrowDown.svg";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../locale/18next";
import "../styles/navbar.css";
import { FiUser,FiKey } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
export default function Navbar() {
  const { t } = useTranslation();
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("uz");
          }}
        >
          Uzbekcha
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          Ruscha
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          Englizcha
        </div>
      ),
    },
  ];
  if (t("check") === "O'zbekcha") {
    items.splice(0, 1);
  }
  if (t("check") === "Ruscha") {
    items.splice(1, 1);
  }
  if (t("check") === "Englizcha") {
    items.splice(2, 1);
  }
  return (
    <NavbarBoot color="navbar" bg="light" expand="lg">
      <Container style={{display:"flex",alignItems:"center"}} fluid>
        <NavbarBoot.Brand href="#">
          <BiMoon className="navbar-moon" />
        </NavbarBoot.Brand>
        <NavbarBoot.Toggle aria-controls="navbarScroll" />
        <NavbarBoot.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <h1 className="navbar-title">RTM</h1>
          </Nav>
          <div className="navbar-right">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              className={"dropdown"}
            >
              <Button style={{ textTransform: "uppercase" }}>
                {t("check")}
              </Button>
            </Dropdown>
            <a href="#" className="Login sign">
              <FiUser />
              {t("Kirish")}/
            </a>
            <a href="" className="Login registration">
            <FiKey className="key-icon"/>
            {t("Ro'yxatdan o'tish")}
            </a>
          </div>
        </NavbarBoot.Collapse>
      </Container>
    </NavbarBoot>
  );
}
