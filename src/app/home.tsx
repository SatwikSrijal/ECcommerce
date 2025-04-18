import React from 'react'
import Navbar from '@/component/Navbar/Navbar'
import PromoBar from '@/component/PromoBar/PromoBar'
import PromoBanner from '@/component/PromoBanner/PromoBanner'
import ProductShowcase from '@/component/ProductShowcase/ProductShowcase'
import CategoryShowcase from '@/component/CategoryShowcase/CategoryShowcase'
import BrandFeatureShowcase from '@/component/BrandFeatureShowcase/BrandFeatureShowcase'
import NewArrivals from '@/component/NewArrivals/NewArrivals'
import Footer from '@/component/Footer/Footer'
import LoginPage from './Login/Login'
import Register from './Register/page'
import ForgotPass from './Forgot_pass/Forgot_pass'
import VerifyCode from './Verify_code/Verify_code'
import SetPassword from './SetPassword/Set_password'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <PromoBar/>
        <PromoBanner/>
        <ProductShowcase/>
        <CategoryShowcase/>
        <BrandFeatureShowcase/>
        <NewArrivals/>
        <Footer/>
        <LoginPage/>
        <Register/>
        <ForgotPass/> 
        <VerifyCode/>
        <SetPassword/>
    </div>
  )
}

export default Home