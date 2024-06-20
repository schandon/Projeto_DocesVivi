// import { useState } from "react";
// import produto from "../produtos.json"
import BannerCarousel from "../components/BannerCarousel";
import Navebar from "../components/Navebar.js";
import TiposItens from "../components/TiposItens"

export default function HomePage(){

  return (
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body className="body">
        <BannerCarousel/>
        <TiposItens/>
      </body>
    <footer className="footer"> </footer>  
    </div>
  )
}

