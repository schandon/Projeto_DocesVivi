// import { useState } from "react";
// import produto from "../produtos.json"
import logo from "../assets/imagens/DocesVivi.svg"
import iconUser from "../assets/icons/ICON-USER.svg"
import iconFavoritos from "../assets/icons/ICON-FAVORITO.svg"
import iconCesta from "../assets/icons/ICON-CESTA.svg"
import iconLocalizacao from "../assets/icons/ICON-LOCALIZACAO.svg"
import BannerCarousel from "../components/BannerCarousel";
// import TiposItens from "../components/TiposItens"

export default function HomePage(){

  return (
    <div className="container">
      <div className="content-ad"></div>
      <section className="header">
        <div className="header-content">
          <img src={logo} alt="Logo" />
          <div>
            <input type="text" className='busca' placeholder="Busque aqui seus Doces" />
            <div className="localizacao">
              <img src={iconLocalizacao} alt="localizacao" />
              <label>Mesa 35</label>
            </div>
          </div>
          <div className="icons">
            <img src={iconUser} alt='user' />
            <img src={iconFavoritos} alt='favorito' />
            <img src={iconCesta} alt='cestaCompras' />
         </div>
        </div>
      </section>
      <body className="body">
        <BannerCarousel/>
        {/* <TiposItens/> */}
      </body>
    <footer className="footer"> </footer>  
    </div>
  )
}

