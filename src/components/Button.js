import React from "react";
import '../css/Button.css';

const Button = ({onClick, className, placeholder, icon}) =>{
  return(
  <div className="ButaoPadrao">
    <button onClick={onClick} className={className}>
      {placeholder}
      {icon && <img src={icon} alt="" className="iconButton" />}
    </button>
  </div>
  );
}

export default Button;