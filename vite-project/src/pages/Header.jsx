import React, { useEffect, useState } from "react";
import qush from "../assets/images/qush.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import home from "../assets/icons/home.svg";
import search from "../assets/icons/search.svg";
import { Select } from "antd";
const { Option } = Select;
import "../styles/header.css";
import Navbar from "../components/Navbar";
import { Link} from "react-router-dom";
import { useStore } from "../store/Store";
import axios from "axios";
import { api } from "../host/Host";
import { useTranslation } from "react-i18next";
import {BsSearch} from "react-icons/bs"
export default function Header() {
  const {t}=useTranslation()
  const setData=useStore(state=>state.setData)
  const setObjectData=useStore(state=>state.setObjectData)
  const objectData=useStore(state=>state.objectData)
  const [region,setRegion]=useState(null)
  const [inputValueOne, setinputValueOne] = useState();
  const [inputValueTwo, setinputValueTwo] = useState();
  console.log(inputValueOne,inputValueTwo);
  const [isFalse,setIsFalse]=useState(true)
      useEffect(() => {
        if(isFalse){
          axios.get(`${api}/api/auth/regions?page=0&size=10`).then(res=>{
            setRegion(res.data.content)
            setIsFalse(false)
          })
          axios.get(`${api}/api/auth/subjects`).then(res=>{
            setObjectData(res.data)
          })
          
        }
        if(inputValueOne!==undefined && inputValueTwo!==undefined){
          axios.get(`${api}/api/auth/certificatesByRegionIdAndSubjectId/${inputValueTwo}/${inputValueOne}?page=0&size=10`).then(res=>{
            console.log(res);
            setData(res.data.content)
          })
        }
    }, [inputValueOne, inputValueTwo]);


  return (
    <div className="header">
      <div className="header_top"></div>
        <Navbar />
        <div className="header_back">
        <Container>
          <div className="header-title">
            <img
              className="logo"
              src={qush}
              alt="bu yerda firmaning qush ko'rinishda embelemasi bor,rangi oq"
            />
            <h2 className="header-logo__text">{t("Respublika Ta’lim Markazi")}</h2>
          </div>
          <div className="header-middle">
            <Row className="header-row">
              <Col lg={2} md={12}>
                <div className="header-col_left">
                  <Link to={"/"} className="header-col_left-text"><img src={home} alt="bu yerda oq uy rasmi bor" />{t("BOSH SAHIFA")}</Link>
                </div>
              </Col>
              <Col lg={4} md={12} className="input_Col">
                <Select
                  showSearch
                  className="header-select_first"
                  style={{ width: "90%" }}
                  placeholder={t("fan nomi...")}
                  onChange={(e) => setinputValueOne(e)}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {objectData!==null?objectData.map(item=>{
                    return(
                      <Option className="header-option" key={item.id} value={item.id}>
                      {item.name}
                  </Option>
                  
                    )
                  }):""}
                </Select>
              </Col>
              <Col lg={4} md={12} className="input_Col">
                <Select
                  style={{ width: "90%" }}
                  className="header-select_first"
                  placeholder={t("viloyat nomi...")}
                  onChange={(e) => setinputValueTwo(e)}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 1
                  }
                >
                  {region!==null?region.map((item,id)=>{
                    return(
                      <Option key={item.id}  value={item.id}>{item.name}</Option>
                    )
                  }):""}
                  
                </Select>
              </Col>
              <Col lg={2} md={12}>
                <div className="search_icon">
                  <Link to={"/table"}>
                    <BsSearch className="search"/>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
