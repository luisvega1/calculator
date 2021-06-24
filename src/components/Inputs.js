import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

const Inputs = ({
  divisas,
  units,
  selectedDivisa,
  selectedUnity,
  quantityToConver,
}) => {
  const [currentDivisa, setCurrentDivisa] = useState(null);
  const [currentUnit, setCurrentUnit] = useState(null);

  useEffect(() => {
    quantityToConver(0);
    setCurrentUnit("DLE");
    setCurrentDivisa("USD");
  }, []);

  const _handleDivisaChange = (event) => {
    selectedDivisa(event, "from");
    setCurrentDivisa(event);
  };

  const _quantityChangeHandle = (value) => {
    quantityToConver(value);
  };

  const _handreUnityChange = (ev) => {
    selectedUnity(ev, "from");
    setCurrentUnit(ev);
  };

  return (
    <div className="inputs">
      <div className="input">
        <label htmlFor="qty">Cantidad</label>
        <NumberFormat
          thousandSeparator={false}
          isNumericString={true}
          defaultValue={0}
          onChange={(value) => _quantityChangeHandle(value.target.value)}
        />
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
          onChange={(e) => _handreUnityChange(e.target.value)}
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

export default Inputs;
