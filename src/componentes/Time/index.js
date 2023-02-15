import "./Time.css";
import { Colaborador } from "../Colaborador";

export const Time = ({ nome, corPrimaria, corSecundaria, colabors }) => {
  return (
    colabors.length > 0 && (
      <section className="time" style={{ background: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colabors">
          {colabors.map((colaborador, index) => (
            <Colaborador
              key={index}
              nome={colaborador.nome}
              imagem={colaborador.imagem}
              descricao={colaborador.cargo}
              corDeFundo={corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};
