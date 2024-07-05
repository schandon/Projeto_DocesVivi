import React from "react";
import '../css/Button.css';

const Button = ({onclick, className, placeholder, icon}) =>{
  return(
    <button onClick={onclick} className={className}>
      {placeholder}
      {icon && <img src={icon} alt="" className="iconButton" />}
    </button>
  );
}

export default Button;