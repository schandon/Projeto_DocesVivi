import { useState } from "react";
import "../css/Itens.css"
import Button from "../components/Button.js"

export default function Item(props) {
    const [quantity, SetQuantity] = useState(1);
    const [values, SetValues] = useState(true);
    const product = props.produtos;   

      // Função para subtrair o valor da quantidade de um produto

      // Função para subtrair o valor da quantidade de um produto
      const minus = () => {
        (quantity - 1) === 1 ? SetValues(true) : SetValues(false)
        if (quantity !== 1) {
            SetQuantity(quantity - 1)
        }
    }

    const plus = () => {
      SetValues(false)
      SetQuantity(quantity + 1)
  }
      // Função para comprar um produto informando o preço final
      const buyProduct = () => {
        if (window.confirm(`Preço final: ${Math.round((product.price * quantity) * 100) / 100}`)) {
            alert('Produto comprado com sucesso!')
            SetQuantity(1)
        }
    }
    return (
      <article className="listaproduto">
        <div className="produto">
          {/* <img src={product.image} alt="imageProduto"/> */}
          <img src={require(`../assets/imagens/${product.image}`)} alt="imageProduto" />
          {/* <img src={bolo2} alt={product.title} className="imageProduto" /> */}
          <div className="content">
            <p className="name-product">{product.title}</p>
            <h3 className="price-product">
                R$ <span>{product.price}</span>
            </h3>
            <div className="quantity">
              <span className="labelqtd">Quantidade:</span>
              <button disabled={values} className="minus" onClick={minus}>-</button>
              <span className="valorqtd">{quantity}</span>
              <button className="plus" onClick={plus}>+</button>
            </div>
          </div>
          <div className="final">
            <Button className="addBaskt" placeholder='Adcionar Cesta' />
            <Button className="buy" onclick={buyProduct} placeholder='Comprar'/>
          </div>
        </div>
        
      </article>

  );
}