import React, {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Navebar from "../components/Navebar.js";
import "../css/Cesta.css";
import { CestaContexto } from '../context/CestaContexto.js';
import Itens from '../components/Itens.js';
import Button from '../components/Button.js';
import CarrinhoCompras from "../assets/icons/ICON-CARRINHO.svg"; 
import Swal from "sweetalert2";

export default function Cesta(){
  const { itensCesta, limparCesta } = useContext(CestaContexto);
  const navigate = useNavigate();
 

  const finalizaCompra =() =>{
    Swal.fire({
      title: "Sucesso",
      text: "Compra finalizada com Sucesso!",
      icon: "success"
    });
    limparCesta();
    navigate("/");
  }

  const avisoCestaVazia = () => {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Cesta Vazia!",
    }).then(() => {;
    navigate("/produtos");
    });
  };
  
  return (
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body>
      <div className="caminho">
          <h5> Home {">"} Cesta Produtos</h5>
      </div>
      <div className="ProdutosCesta">
          {itensCesta.map((item, index) => (
              <Itens key={index} produtos={item} BotoesFinais={false} finalizacaoCompra={true}/>
          ))} 
      { itensCesta.length === 0 && avisoCestaVazia()}
      { itensCesta.length > 0 && <Button className="finalizaCompras" onClick={finalizaCompra} alt="Finalizar Compras" placeholder="Finaliza Compras" icon={CarrinhoCompras} />}
      </div>
      </body>
      <footer className="footer"> </footer>  
    </div>
  )
}