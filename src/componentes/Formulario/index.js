import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

import { useState } from "react";

export const Formulario = ({ novosColaboradores, novaListaTI }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const forSubmitTimes = (e) => {
    e.preventDefault();
    novosColaboradores({ nome, cargo, imagem, time });
  };

  return (
    <section className="formulario">
      <form onSubmit={forSubmitTimes}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          required={true}
          placeholder="Digite seu nome"
          valor={nome}
          changeState={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          required={true}
          placeholder="Digite seu cargo"
          valor={cargo}
          changeState={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          required={true}
          placeholder="Informe o endereço de imagem"
          valor={imagem}
          changeState={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Time"
          required={true}
          optionsForTimes={novaListaTI}
          valor={time}
          changeState={(valor) => setTime(valor)}
        />
        <Botao nome="Criar Card " />
      </form>
    </section>
  );
};
