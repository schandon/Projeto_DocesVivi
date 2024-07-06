import { useState, React } from "react";
import Navebar from "../components/Navebar.js";
import produtos from "../produtos.json";
import Itens from "../components/Itens.js";
import '../css/Produto.css';

export default function Produto() {
  const [produtoLista, /*setProdutoLista*/] = useState(produtos.bottles)

  return(
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body className="body">
        <div className="caminho">
          <h5> Home {">"} Todo Cardapio</h5>
        </div>
        <div className="main-products">
          {produtoLista.map((p, index)=> (
            <Itens key={index} produtos={p}/>
          ))}
        </div>
      </body>
      <footer className="footer"> </footer>  
    </div>
  )

}