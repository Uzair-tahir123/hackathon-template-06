// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Slides from "@/components/Slides";
import SubHero from "@/components/Subhero";
import Blog from "@/app/blog/page";
export default function Home(){
  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
    <Blog/>
    {/* <Footer/> */}
    </>
  )
}