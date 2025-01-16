import "./CampoTexto.css";
import { useState } from "react";

const CampoTexto = (props) => {
  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        placeholder={props.placeholder}
        onChange={aoDigitado}
        value={props.valor}
      ></input>
    </div>
  );
};

export default CampoTexto;
