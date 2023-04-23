import React from 'react'
import {Row,Col} from 'antd'
import './products.css'
import img3 from '../../assets/img3.png'
import { useTranslation } from 'react-i18next'
function Products() {
   const {t}=useTranslation()
  return (
    <div className='products-page'>
            <div className='page-title'>
            <p>{t("Metodik mahsulotlar")}</p>
        </div>
        <div className='container products-cards'>
            
                    <div className="product-card">
                       <div>
                       <img src={img3} alt="" />
                       </div>
                       <div className='prodect-text_box'>
                       <p className="product-card-title">
                        {t("Dars ishlanma")}
                       </p>
                       <p className='product-desc'>
                       {t("Xalqaro tajribalarga asoslangan, ilg‘or interfaol metodlar bilan o‘tilgan yuqori saviyadagi bir soatlik namuanali dars yoki to‘garak mashg‘uloti ishlanmasidir.")}
                       </p>
                       </div>
                    </div>
                
                    <div className="product-card">
                       <div>
                       <img src={img3} alt="" />
                       </div>
                       <div className='prodect-text_box'>
                       <p className="product-card-title">
                       {t("Videodars")}
                       </p>
                       <p className='product-desc'>
                       {t("Darsdagi yoki darsdan tashqari mashg‘ulotlardagi interfaol metodlarni yoritib bergan dars lshlanmasi yoki shaxsiy innovatsion metodik tajribani tushuntirib beruvchi davomiyligi 7 minutgacha bo‘lgan, hajmi 300 mb dan oshmagan videorolik. Videoni qanday apparatda olingani e’tiborga olinmaydi.")}
                       </p>
                       </div>
                    </div>
                    <div className="product-card">
                       <div>
                       <img src={img3} alt="" />
                       </div>
                       <div className='prodect-text_box'>
                       <p className="product-card-title">
                       {t("Metodik qo‘llanma")}
                       </p>
                       <p className='product-desc'>
                       {t("O‘quv metodik qo‘llanmalar; tavsiyanoma; brashyuralar pdf formatda yuboriladi.")}
                       </p>
                       </div>
                    </div>
        </div>
    </div>
  )
}

export default Products