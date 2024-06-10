import { useState } from "react";
import produto from "../produtos.json"
import logo from "../assets/imagens/DocesVivi.svg"
import iconUser from "../assets/icons/ICON-USER.svg"
import iconFavoritos from "../assets/icons/ICON-FAVORITO.svg"
import iconCesta from "../assets/icons/ICON-CESTA.svg"
import iconLocalizacao from "../assets/icons/ICON-LOCALIZACAO.svg"
import bannerRepo from "../assets/banner/BannerRepo.png"
import bannerYoutube from "../assets/banner/BannerYoutube.png"

export default function produtos(){
  // const [produtosList, setProdutosList] = useState(produto.bottles)

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
        <div class="carousel">
          <div class="slides">
            <div class="slide">
              <img src={bannerRepo} alt="Imagem 1"/>
            </div>
            <div class="slide">
              <img src={bannerYoutube} alt="Imagem 2"/>
            </div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
      </div>
      </body>
    <footer className="footer"> </footer>  
    </div>
  )
}

