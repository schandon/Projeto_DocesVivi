import React from 'react';
import Navebar from "../components/Navebar.js";
import Button from "../components/Button.js";
import "../css/Cesta.css";
import IconCesta from "../assets/icons/ICON-CESTA.svg";



export default function HomePage(){
  return (
    <div className="container">
      <div className="content-ad"></div>
        <Navebar/>
      <body className="body">
      <Button className={'teste'} placeholder={'teste'} icon={IconCesta}/>
      
        
      </body>
      <footer className="footer"> </footer>  
    </div>
  )
}