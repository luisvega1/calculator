import { useEffect, useState } from "react";

const InputsConverted = ({
  total,
  selectedDivisa,
  selectedUnity,
  divisas,
  units,
}) => {
  const [currentDivisa, setCurrentDivisa] = useState(null);
  const [currentUnit, setCurrentUnit] = useState(null);

  useEffect(() => {
    setCurrentUnit("GLE");
    setCurrentDivisa("USD");
  },[]);

  const _handleDivisaChange = (ev) => {
    selectedDivisa(ev, "to");
    setCurrentDivisa(ev)
  };

  const _handleUnityChange = (ev) => {
    selectedUnity(ev, "to");
    setCurrentUnit(ev)
  };

  return (
    <div className="inputs">
      <div className="input">
        <label htmlFor="qty">Cantidad</label>
        <input type="text" disabled={true} value={total} />
      </div>
      <div className="moneda">
        <label htmlFor="moneda">Moneda</label>
        <select
          name="divisa"
          onChange={(e) => _handleDivisaChange(e.target.value)}
          value={currentDivisa}
        >
          {divisas.map((moneda, index) => {
            return (
              <option value={moneda} key={index}>
                {moneda}
              </option>
            );
          })}
        </select>
      </div>
      <div className="unidad">
        <label htmlFor="unidad">Unidad</label>
        <select
          name="unidades"
          value={currentUnit}
          onChange={(e) => _handleUnityChange(e.target.value)}
        >
          <option value="">Seleccionar...</option>
          {units.map((unit, index) => {
            return (
              <option value={unit} key={index}>
                {unit}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputsConverted;
