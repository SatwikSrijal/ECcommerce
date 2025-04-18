import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import LoginPage from "./Login/Login";
import RegisterPage from "./Register/Register";
import Navbar from "@/component/Navbar/Navbar";
import PromoBar from "@/component/PromoBar/PromoBar";
import NewArrivals from "@/component/NewArrivals/NewArrivals";
import ProductShowcase from "@/component/ProductShowcase/ProductShowcase";
import BrandFeatureShowcase from "@/component/BrandFeatureShowcase/BrandFeatureShowcase";
import CategoryShowcase from "@/component/CategoryShowcase/CategoryShowcase";
import PromoBanner from "@/component/PromoBanner/PromoBanner";
import Footer from "@/component/Footer/Footer";
import NavIcons from "@/component/Navbar/NavIcons";
import home from "./home";
import Home from "./page";

const inter=Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: "MY Ecommerce App",
  description: "A complete E-Commerce application with next.js and wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/>
        <PromoBar/>
        <PromoBanner/>
        <ProductShowcase/>
        <CategoryShowcase/>
        <BrandFeatureShowcase/>
        <NewArrivals/>
        <Footer/>
        <LoginPage/>
        <RegisterPage/> */}
        <Home/>
      </body>
    </html>
  );
}
