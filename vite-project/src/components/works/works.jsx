import React from "react";
import "./works.css";
import { Row, Col, Card } from "antd";
import { SlLocationPin } from "react-icons/sl";
import img2 from "../../assets/img2.png";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
export default function CaruselCom(){
  const {t}=useTranslation()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div className="works-page">
      <div className="page-title">
        <p>{t("Namunaviy ishlar")}</p>
      </div>
      <div className="work-cards container">
        <Carousel 
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          <div style={{ margin: "10px" }}> 
            <Card className="namuna-card">
             <div className="sample-works-header">
             <h5 className="namuna-card_title">{t("Tursunov Yo'ldoshev")}</h5>
            <p className="namuna-card_text">
              <SlLocationPin />
              {t("Jizzax viloyati, Jizzax shahri")}
            </p>
             </div>
            <img src={img2} alt="" width={"100%"}/>
          </Card>
          </div>
          
          <div style={{ margin: "10px" }}> 
          <Card className="namuna-card">
             <div className="sample-works-header">
             <h5 className="namuna-card_title">{t("Ra'noxon Tobarova")}</h5>
            <p className="namuna-card_text">
              <SlLocationPin />
              {t("Jizzax viloyati, Jizzax shahri")}
            </p>
             </div>
            <img src={img2} alt="" width={"100%"} />
          </Card>
          </div>
          <div style={{ margin: "10px" }}> 
          <Card className="namuna-card">
             <div className="sample-works-header">
             <h5 className="namuna-card_title">{t("Elmurod Tuxtamurodov")}</h5>
            <p className="namuna-card_text">
              <SlLocationPin />
              {t("Jizzax viloyati, Jizzax shahri")}
            </p>
             </div>
            <img src={img2} alt="" width="100%"/>
          </Card>
          </div>
          <div style={{ margin: "10px" }}> 
          <Card className="namuna-card">
             <div className="sample-works-header">
             <h5 className="namuna-card_title">{t("Gulnirabonu Abduraxmonov")}</h5>
            <p className="namuna-card_text">
              <SlLocationPin />
              {t("Jizzax viloyati, Jizzax shahri")}
            </p>
             </div>
            <img src={img2} alt="" width="100%"/>
          </Card>
          </div>
          <div style={{ margin: "10px" }}> 
          <Card className="namuna-card">
             <div className="sample-works-header">
             <h5 className="namuna-card_title">{t("Dilyara Gafurova")}</h5>
            <p className="namuna-card_text">
              <SlLocationPin />
              {t("Jizzax viloyati, Jizzax shahri")}
            </p>
             </div>
            <img src={img2} alt="" width="100%"/>
          </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
