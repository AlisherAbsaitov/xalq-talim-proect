import React, { useEffect, useState } from "react";
import { Table as Tab } from "antd";
import { Button, Container } from "react-bootstrap";
import download from "../assets/icons/download.svg";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useStore } from "../store/Store";
import "../styles/header.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../host/Host";
import { useTranslation } from "react-i18next";
export default function Table() {
  const {t}=useTranslation()

  const data = useStore((state) => state.data);
  const [certificateId,setCertificateId]=useState(null)
  useEffect(()=>{
    if(certificateId!==null){
      axios.get(`${api}/api/auth/certificate/${certificateId}`).then(res=>{
        console.log(res);
      })
    }
  },[certificateId])
  const columns = [
    {
      title: "ID",
      key: "id",
      render: (data, index, id) => id + 1,
    },
    {
      title: t("O'qituvchi"),
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: t("Mavzu"),
      dataIndex: "theme",
      key: "theme",
    },
    {
      title: t("Maktab"),
      dataIndex: "school",
      key: "school",
    },
    {
      title: t("Viloyat"),
      dataIndex: "regionName",
      key: "regionName",
    },
    {
      title: t("Baho"),
      dataIndex: "raiting",
      key: "raiting",
    },
    {
      title: t(`Ko'rish`),
      dataIndex: "subjectsId",
      key: "subjectsId",
      render: (id) => {
        return (
          <Link to={"#"} className="table-eye" onClick={()=>{setCertificateId(id)}}  style={{ backgroundColor: "white" }}>
            <AiFillEye className="eye" />
          </Link>
        );
      },
    },
  ];
  return (
    <>
      <div className="table-box">
        <Container>
          <div className="table-top">
            <h3 className="table-top_title">IMK QARORI</h3>
            <img src={download} alt="" />
          </div>
          <Tab
            className="table"
            columns={columns}
            dataSource={data!=null?data:""}
          />
          <div className="Alisher"><img src="" alt="" /></div>
        </Container>
      </div>
    </>
  );
}
