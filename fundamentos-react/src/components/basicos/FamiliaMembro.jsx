import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
};
