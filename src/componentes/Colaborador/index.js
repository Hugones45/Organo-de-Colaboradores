import "./Colaborador.css";

export const Colaborador = ({ nome, descricao, imagem, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ background: corDeFundo }}>
        <img src={imagem} alt={imagem} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{descricao}</h5>
      </div>
    </div>
  );
};
