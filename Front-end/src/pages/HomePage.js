import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerCarousel from "../components/BannerCarousel";
import Navebar from "../components/Navebar.js";
import TiposItens from "../components/TiposItens.js"
import Button from "../components/Button.js"

export default function HomePage(){
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/produtos");
  }
  return (
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body className="body">
        <BannerCarousel/>
        <TiposItens/>
        <Button className="cardapio"  onclick={goToProducts} placeholder="Acesso Cardapio" />
      </body>
      <footer className="footer"> </footer>  
    </div>
  )
}

