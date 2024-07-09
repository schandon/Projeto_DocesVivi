import React, { createContext, useState } from 'react';

export const CestaContexto = createContext();

export const CestaProvider = ({ children }) => {
  const [itensCesta, setItensCesta] = useState([]);
  const [cesta, setCesta] = useState([]);
  const [tipo, setTipo] = useState(null);

  const addItemToCesta = (item) => {
    setItensCesta((prevItems) => [...prevItems, item]);
  };
  const removeItemFromCesta = (itemId) => {
    setItensCesta((prevItems) => prevItems.filter(item => item.id !== itemId));
    console.log(itemId);
  };

  const trocaTipo = (string) => {
    setTipo(string);
    console.log(tipo);
  }
  
  const mostraTipo = () =>{
    setTipo(tipo);
  }
  const limparCesta = () =>{
    setItensCesta([]);
  }

  const updateItemQuantity = (productId, newQuantity) => {
    setCesta(cesta.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // const updateTipoLista = (pruductTipo) =>{
  //   setCesta
  // }
  return (
    <CestaContexto.Provider value={{ itensCesta, addItemToCesta, updateItemQuantity, removeItemFromCesta, limparCesta, trocaTipo, mostraTipo }}>
      {children}
    </CestaContexto.Provider>
  );
};
