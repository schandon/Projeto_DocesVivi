import React from "react"
import { useNavigate } from 'react-router-dom';
import logo from "../assets/imagens/DocesVivi.svg"
import iconUser from "../assets/icons/ICON-USER.svg"
import iconFavoritos from "../assets/icons/ICON-FAVORITO.svg"
import iconCesta from "../assets/icons/ICON-CESTA.svg"
import iconLocalizacao from "../assets/icons/ICON-LOCALIZACAO.svg"
import HomePage from "../pages/HomePage.js"
import Swal from "sweetalert2";


export default function Navebar(){
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  }

  const goToCesta = () => {
    navigate("/cestaprodutos");
  }

  const aindaNaoDesenvolvido = () => {
    Swal.fire({
      icon: "warning",
      title: "Ainda não desenvolvido!",
      text: "Esta funcionalidade ainda não está disponível.",
    });
    navigate('/');
  }




  return (
    <section className="header">
      <div className="header-content">
        <a href={HomePage}>
          <img src={logo} onClick={goToHome} alt="Logo" />
        </a>
        <div>
          <input type="text" className='busca' placeholder="Busque aqui seus Doces" />
          <div className="localizacao">
            <img src={iconLocalizacao} alt="localizacao" />
            <label>Mesa 35</label>
          </div>
        </div>
        <div className="icons">
          <img src={iconUser} className="IconUser" alt='user'onClick={aindaNaoDesenvolvido} />
          <img src={iconFavoritos} className="IconFavoritos" onClick={aindaNaoDesenvolvido} alt='favorito' />
          <img src={iconCesta} className="IconCesta" onClick={goToCesta} alt='cestaCompras' />
      </div>
      </div>
    </section>
  )  
}