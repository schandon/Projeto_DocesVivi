import React from 'react';
import Navebar from "../components/Navebar.js";
import "../css/Cesta.css";




export default function HomePage(){
  return (
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body>
      <div className="caminho">
          <h5> Home {">"} Cesta Produtos</h5>
        </div>
        <div className="ProdutosCesta">
          
        </div>
      </body>
      <footer className="footer"> </footer>  
    </div>
  )
}