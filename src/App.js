import { Formulario } from "./componentes/Formulario";
import { Banner } from "./componentes/Banner";
import { useState } from "react";
import { Time } from "./componentes/Time";
import Rodape from "./componentes/Rodape";

const App = () => {
  const [colaboradores, setColaboradores] = useState([]);

  const cadastrosDeColaboradores = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const listaTI = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Front End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "UX e Design", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
    { nome: "Mobile", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  return (
    <div>
      <Banner />
      <Formulario
        novaListaTI={listaTI.map((item) => item.nome)}
        novosColaboradores={(colaborador) =>
          cadastrosDeColaboradores(colaborador)
        }
      />
      {listaTI.map((lista) => (
        <Time
          key={lista.nome}
          nome={lista.nome}
          corPrimaria={lista.corPrimaria}
          corSecundaria={lista.corSecundaria}
          colabors={colaboradores.filter(
            (colaborador) => colaborador.time === lista.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
};

export default App;
