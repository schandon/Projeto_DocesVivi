import React from "react";
import '../css/Button.css';

const Button = ({onclick, className, placeholder}) =>{
  return(
    <button onClick={onclick} className={className}>
      {placeholder}
    </button>
  );
}

export default Button;