import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import qush from "../assets/images/qush.png"
import "../styles/footer.css";
import footer_logo from "../assets/images/felix.png"
import { useTranslation } from 'react-i18next';
export default function Footer() {
  const {t}=useTranslation()
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <div className='footer-left'>
              <img src={qush} alt="rasm bor" width={80}/>
              <p>{t("O'zbekiston respublikasi Xalq Ta'lim vazirligi")}</p>
            </div>
            <div className='footer-left'>
              <img src={qush} alt="rasm bor" width={80}/>
              <p>{t("Respublika ta’lim markazi")}</p>
            </div>
          </Col>
          <Col lg={5} md={12} className='footer-middle'>
            <address  className='footer-adress'>
              <a className='footer-list-item_active' href="#" >
                {t("100022, Toshkent shahar, Yakkasaroy tumani, Bobur ko'chasi, 9-uy")}
              </a>
            </address>
            <a className='email footer-list-item_active' href="mailto:rtm@xtv.uz">rtm@xtv.uz</a>
            <a className='footer-tel footer-list-item_active' href="tel:+998712461805">+998(71)-246-18-05</a>
          </Col>
          <Col lg={3} md={12}>
            <div className='footer-right'>
            <ol className='footer-list'>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Asosiy")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Biz haqimizda")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Normativ hujjatlar")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Ommalashtirish tartibi")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Metodik mahsulotlar")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Namunaviy ishlar")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Ommalashtirish ishlari")}</a></li>
            </ol>
            <ul className='footer-list'>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Facebook")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Telegram")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Youtube")}</a></li>
              <li className='footer-list-item'><a className='footer-list-item_active' href="#">{t("Instagram")}</a></li>
            </ul>
            </div>
          </Col>
        </Row>
        <hr className='footer-chiziq'/>
        <div className='footer-boottom'>
          <p>A product of</p>
          <img src={footer_logo} alt="rasm bor" />
        </div>
        <p className='footer_bottom'>2022 Lift Media.All right reserved</p>
      </Container>
    </div>
  )
}
