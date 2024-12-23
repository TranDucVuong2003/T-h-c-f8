import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Breadcumb from '../components/Breadcumb'

function MainLayout() {
  return (
    <>
      <Header/>
      <Breadcumb/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
