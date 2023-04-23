import React from 'react'
import './documents.css'
import {Card,Badge} from 'antd'
import {HiDownload} from 'react-icons/hi'
import {AiOutlineFileText} from 'react-icons/ai'
import gerb from '../../assets/gerb.png'
import xalqTalim from '../../assets/images/xalq.png'
import f from "../../pdf/doc.pdf"
import img1 from '../../assets/icons/documentCard1.svg'
import img2 from '../../assets/icons/documentCard2.svg'
import img3 from '../../assets/icons/documentCard3.svg'
import img4 from '../../assets/icons/documentCard4.svg'
import Products from '../products/products'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
function Documents() {
    const {t}=useTranslation()
  return (
    <>
    <div className='documents-page'>
        <div className='page-title'>
            <p>{t("Normativ hujjatlar")}</p>
        </div>
        <div className='documents-cards container'>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='document-card'>
                        <div className="document-card-logo">
                            <img src={gerb} alt="" width={100} height={100}/>
                        </div>
                        <div className="document-card-text">
                            <div className="card-title">
                                {t("Prezident qarori")}
                            </div>
                            <div className="card-description">
                            {t("O'zbekiston Respublikasi Prezidentining 2022 yil 11-maydagi 134-sonli 2022-2026 yillarda Xalq ta'limini rivojlantirish bo'yicha milliy dasturini tasdiqlash to'g'risida gi farmoni.")}</div>
                            <Link className='card-download mt-1'  to={f} download target='_blank' >
                                <HiDownload/>{t("Yuklab olish")}
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='document-card'>
                        <div className="document-card-logo">
                            <img src={gerb} alt="" width={100} height={100}/>
                        </div>
                        <div className="document-card-text">
                            <div className="card-title">
                            {t("Vazirlar Mahkamasi qarori")}
                            </div>
                            <div className="card-description">
                            {t("O'zbekiston Respublikasi Vazirlar Mahkamasining 2021 yil 26-fevraldagi 108-sonli O'zbekiston Respublikasi Xalq ta'limi vazirligi huzuridagi Respublika ta'lim markazi faoliyatini yanada takomillashtirish chora-tadbirlari to'g'risida gi qarori")}.
                            </div>
                            <Link className='card-download mt-1'  to={f} download target='_blank' >
                                <HiDownload/>{t("Yuklab olish")}
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <div className='document-card'>
                        <div className="document-card-logo">
                            <img src={xalqTalim} alt="" width={100} height={100}/>
                        </div>
                        <div className="document-card-text">
                            <div className="card-title">
                                {t("Nizom")}
                            </div>
                            <div className="card-description">
                            {t("O'zbekiston Respublikasi Xalq ta'limi vazirligi huzuridagi Respublika ta'lim markazi to'g'risidagi nizomi.")}
                            </div>
                            <Link className='card-download mt-1'  to={f} download target='_blank' >
                                <HiDownload/>{t("Yuklab olish")}
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="documents-button">
            <Link to={f} className='documents-button_link' style={{textDecoration:"none"}} target='_blank'><AiOutlineFileText className='doc-icon'/>{t("Ommalashtirish nizomi")}</Link>
        </div>
        <div className='page-title'>
            <p>{t("Ommalashtirish tartibi")}</p>
        </div>
        <div className='container'>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <Card
                    className='popularization-procedure'
                    style={{
                        margin:'10px',
                        position: 'relative'
                    }}
                    >
                        <div className='badge-card'>
                            1
                        </div>
                      
                        <div className="doc-card1">
                            <div className="card1-logo">
                                <img src={img4} alt="" />
                            </div>
                            <div className='doc-card_box'>
                                <p className='card-text'>
                            {t("ERP orqali tizimimizdan ro'yhatdan o'ting va o'z ishingizni ommalashtirish uchun tizimga joylang")}
                            </p>
                            <div className="documents-button new-btn">
            <a className='new-btn1' href='#'>{t("Ro'yxatdan o'tish")}</a>
        </div>
                            <div className="documents-button new-btn">
            <a className='new-btn2' href='#'>{t("Yo'riqnoma")}</a>
        </div>
                            </div>
                        </div>

                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card
                    className='popularization-procedure'
                    style={{
                        margin:'10px',
                    }}
                    >
                         <div className='badge-card'>
                            2
                        </div>
                        <div className="doc-card1">
                            <div className="card1-logo">
                                <img src={img3} alt="" />
                            </div>
                            <div className='doc-card_box'>
                            <p>
                            {t("Tizimga joylangan ommalashtirish ishini sizning faningizdan dars beradigan boshqa o'qituvchilar tomonidan 2 oy baholanishini kuting.")}                            </p>
                            </div>
                    
                        </div>

                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card
                    className='popularization-procedure'
                    style={{
                        margin:'10px',
                    }}
                    >
                         <div className='badge-card'>
                            3
                        </div>
                        <div className="doc-card1">
                            <div className="card1-logo">
                                <img src={img2} alt="" />
                            </div>
                           <div className='doc-card_box'>
                           <p>
                           {t("Eng ko'p va eng yuqori baholangan har bir fandan 100 ta ishni ekspertlar tomonidan baholanadi va tizim uni kamayish usulida Respublika, Viloyat, Tumanda ommalashganini ajratib beradi.")}                            </p>
                           </div>
                       
                        </div>

                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card
                    className='popularization-procedure'
                    style={{
                        margin:'10px',
                    }}
                    >
                         <div className='badge-card'>
                            4
                        </div>
                        <div className="doc-card1">
                            <div className="card1-logo">
                                <img src={img1} alt="" />
                            </div>
                            <div className='doc-card_box'>
                            <p>
                            {t("Sizning ishingiz ommmalashgan bo'lsa , o'zingizning shaxsiy kabinetingizdan ishingiz ommalashgani to'g'risida Sertifikatlarni yuklab oling.")}                            </p>
                            </div>
                                 </div>

                    </Card>
                </Col>
            </Row>
        </div>
    </div>
    <Products/>
    </>
  )
}

export default Documents