import "./ListaSuspensa.css";

export const ListaSuspensa = ({
  label,
  optionsForTimes,
  valor,
  changeState,
}) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <select value={valor} onChange={(e) => changeState(e.target.value)}>
        <option value=""></option>
        {optionsForTimes.map((opTimes) => (
          <option key={opTimes}>{opTimes}</option>
        ))}
      </select>
    </div>
  );
};
