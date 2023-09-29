import { check_token } from "@/Redux/AuthSlice"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const Header=dynamic(()=>import("../Header/Header"),{
    ssr:true
})
const Footer=dynamic(()=>import("../Footer/Footer"),{
    ssr:true
})

const Wrapper = ({children}) => {
 
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Wrapper