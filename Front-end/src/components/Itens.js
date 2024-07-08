import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Itens.css"
import Button from "../components/Button.js"
import IconBasket from "../assets/icons/ICON-CESTA.svg"
import IconLixeira from "../assets/icons/ICON-LIXEIRA.svg"
import Swal from "sweetalert2";
import { CestaContexto } from "../context/CestaContexto";


export default function Item(props) {
    const [quantity, SetQuantity] = useState(1);
    const [values, SetValues] = useState(true);
    const { addItemToCesta, removeItemFromCesta  } = useContext(CestaContexto); 
    const { produtos: product,BotoesFinais = true, FinalizacaoCompra = true } = props;   
    const navigate = useNavigate();

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
    
    const addCesta = () => {
        const item = {...product, quantity}
        addItemToCesta (item);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Produto adicionado a Cesta!"
        });
        console.log(item);
      }
      const finalizaCompra =() =>{
        Swal.fire({
          title: "Sucesso",
          text: "Compra finalizada com Sucesso!",
          icon: "success"
        });
        navigate("/");
      }

    return (
      <article className="listaproduto">
        <div className="produto">
        {product.image && (
                    <img src={require(`../assets/imagens/${product.image}`)} className="imageProduto" alt="imageProduto" />
                )}
          <div className="content">
            <p className="name-product">{product.title} </p>
            <h3 className="price-product">
                R$ <span>{product.price.toFixed(2)}</span>
            </h3>
           { !FinalizacaoCompra &&  <div className="quantity">
              <span className="labelqtd">Quantidade:</span>
              <button disabled={values} className="minus" onClick={minus}>-</button>
              <span className="valorqtd">{quantity}</span>
              <button className="plus" onClick={plus}>+</button>
            </div>}
          </div>
          { BotoesFinais && (
          <div className="final">
            <Button className="addCesta" onclick={addCesta} placeholder='Adcionar Cesta' icon={IconBasket} />
            <Button className="addCompra" onclick={finalizaCompra} placeholder='Comprar' />
          </div>
          )}
          { FinalizacaoCompra && (
            <div className="finalizaCompra">
              <button className={'IconLixeira'} onClick={()=>removeItemFromCesta(product.id)} alt="IconLixeira"><img src={IconLixeira} className="IconLixeira" alt="Excluir Produto"/></button>
              R$ <span>{(product.price*product.quantity).toFixed(2)}</span>

            </div>
          )}
        </div>
        
      </article>

  );
}