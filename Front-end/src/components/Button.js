import React from "react";
import '../css/Button.css';

const Button = ({onclick, className, placeholder, icon}) =>{
  return(
  <div className="ButaoPadrao">
    <button onClick={onclick} className={className}>
      {placeholder}
      {icon && <img src={icon} alt="" className="iconButton" />}
    </button>
  </div>
  );
}

export default Button;