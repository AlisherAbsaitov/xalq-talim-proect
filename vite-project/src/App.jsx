import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './components/Footer'
import Documents from './components/documentsFile/documents'
import Products from './components/products/products'
import Works from './components/works/works'
import { useStore } from './store/Store'
import Table from './pages/Table'
export default function App() {
  return (
    <React.Fragment> 
      <Header/>
      <Routes>
        <Route path='/' element={<Documents/>}/>
        <Route path='/table' element={<Table/>}/>
      </Routes>
      <Works/>
      <Footer/>
    </React.Fragment>
  )
}
