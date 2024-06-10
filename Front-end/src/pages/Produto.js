import { useState } from "react";
import produto from "../produtos.json"
import logo from "../assets/DocesVivi.svg"

export default function produtos(){
  const [produtosList, setProdutosList] = useState(produto.bottles)

  return (
    
    
    <section className="Hearder">
        <img src={logo} alt="Logo"/>
        <input type="text" placeholder="Busque aqui seus Doces"  />
          
    </section>
  )
}

