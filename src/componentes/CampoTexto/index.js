import "./CampoTexto.css";

export const CampoTexto = ({
  label,
  placeholder,
  valor,
  changeState,
  required,
}) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={(e) => changeState(e.target.value)}
      />
    </div>
  );
};
