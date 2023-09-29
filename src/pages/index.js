// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { useDispatch } from "react-redux"
import ImageCaraouselForHome from "../../Components/ImageCaraouselForHome"
import Service from "../../Components/Services/Service"
import Team from "../../Components/Team/Team"
import AboutForHome from "../../Components/AboutForHome/AboutForHome"


// const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  
  return (
    <>
    
    <ImageCaraouselForHome/>
    <Service/>
    <AboutForHome/>
    <Team/>
    </>
  )
}

export default Home

