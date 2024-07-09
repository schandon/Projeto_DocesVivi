import React, { useContext } from 'react';
import '../css/TiposItens.css';
import { useNavigate } from 'react-router-dom';
import CafeManha from '../assets/tipes_itens/cafe_manha.png';
import Sorvete from '../assets/tipes_itens/sorvetes.png';
import EntradaDoces from '../assets/tipes_itens/entradas_doces.png';
import Bolos from '../assets/tipes_itens/bolos.png';
import EntradaSalgada from '../assets/tipes_itens/entradas_salgadas.png';
import {CestaContexto} from '../context/CestaContexto'

export default function TiposItens() {
  
  const navigate = useNavigate();

  const goToBolo = () => {
    navigate("/produtos");
    trocaTipo("Bolos");
  }

  const goToEntradaDoce = () => {
    navigate("/produtos");
    trocaTipo("EntradaDoce");
  }

  const goToEntradaSalgadas = () => {
    navigate("/produtos");
    trocaTipo("EntradaSalgada");
  }
  const goToCafeManha = () => {
    navigate("/produtos");
    trocaTipo("CafeManha");
  }
  const goToSobremesa = () => {
    navigate("/produtos");
    trocaTipo("Sobremesas");
  }
  const { trocaTipo } = useContext(CestaContexto)
  
  return (
    <div className="AcessoRapido">
      <h2>Acesso Rápido Produtos</h2>
      <div className="Categorias">
        <div className="ClassesDoce">
          <div className="Doce">            
            <button className="botaoTipoDoce" onClick={goToBolo}><img src={Bolos} alt="Bolos"/></button>
            <span>Bolos</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onClick={goToCafeManha}> <img src={CafeManha} alt="Café da Manha"/></button>
            <span>Café da Manha</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onClick={goToEntradaDoce}> <img src={EntradaDoces} alt="Entrada Doces"/> </button>
            <span>Entrada Doces</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onClick={goToEntradaSalgadas}> <img src={EntradaSalgada} alt="Entrada Salgada"/> </button>
            <span>Entrada Salgada</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onClick={goToSobremesa}> <img src={Sorvete} alt="Sorvete"/> </button>
            <span>Sobremesas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
