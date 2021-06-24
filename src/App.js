import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import InputsConverted from "./components/InputsConverted";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { publicUnits, divisas, getUnitConvert } from "./helpers/tables";
import { getConversion } from "./helpers/services";

const App = () => {
  //LISTAS DE DIVISAS Y UNIDADES
  const [units, setUnits] = useState([]);
  const [divisasList, setDivisas] = useState([]);

  //UNIDAD SELECCIONADA
  const [currentUnidad, setCurrentUnidad] = useState("DLE");

  //DIVISA SELECCIONADA
  const [currentDivisa, setCurrentDivisa] = useState("USD");

  //CANTIDAD A CONVERTIR
  const [toConvert, setToConvert] = useState(null);

  //DIVISA SELECCIONADA COMPONENTE A CONVERTIR
  const [currentToDivisa, setCurrentToDivisa] = useState("USD");

  //UNIDAD SELECCIONADA COMPONENTE A CONVERTIR
  const [currentToUnidad, setCurrentToUnidad] = useState("GLE");

  //TOTAL DE OPERACION
  const [total, setTotal] = useState(0);

  //AL INCIAR CARGA LAS UNIDADES Y DIVISAS
  useEffect(() => {
    setUnits(publicUnits());
    setDivisas(divisas);
  }, []);

  //SE EJECUTA CADA QUE SE CAMBIA EL INPUT DE DIVISAS DEL CONVERTIDOR DE:
  const getSelectedDivisa = (ev, component) => {
    component == "from" ? setCurrentDivisa(ev) : setCurrentToDivisa(ev);
    component == "from"
      ? convert(ev, currentToDivisa, toConvert, currentUnidad, currentToUnidad)
      : convert(currentDivisa, ev, toConvert, currentUnidad, currentToUnidad);
  };

  //SE EJECUTA CADA QUE SE CAMBIA EL INPUT DE UNIDADES DEL CONVERTIDOR DE:
  const getUnity = (ev, component) => {
    component == "from" ? setCurrentUnidad(ev) : setCurrentToUnidad(ev);
    component == "from"
      ? convert(currentDivisa, currentToDivisa, toConvert, ev, currentToUnidad)
      : convert(currentDivisa, currentToDivisa, toConvert, currentUnidad, ev);
  };

  //SE EJECUTA CADA QUE SE CAMBIA EL INPUT DE CANTIDAD DEL CONVERTIDOR DE:
  const getQuantityToConvert = (ev) => {
    setToConvert(ev);
    convert(currentDivisa, currentToDivisa, ev, currentUnidad, currentToUnidad);
  };

  const convert = async (
    curDivisa,
    curToDivisa,
    qtyToConvert,
    curUnity,
    curToUnity
  ) => {
    const data = await getConversion(
      curDivisa,
      curToDivisa,
      qtyToConvert,
      curUnity,
      curToUnity
    );
    const totalConvertido = data.rates[curToDivisa].rate_for_amount;

    const unitToConvertValue = await getUnitConvert(curUnity, curToUnity);
    const total = totalConvertido / unitToConvertValue;
    setTotal(total);
  };

  return (
    <section>
      <Header />
      <div className="main-container">
        <div className="calculator">
          <div className="from">
            <h1 className="title">Convertidor de:</h1>
            <Inputs
              divisas={divisasList}
              units={units}
              selectedDivisa={getSelectedDivisa}
              selectedUnity={getUnity}
              quantityToConver={getQuantityToConvert}
            />
          </div>
          <div className="to">
            <h1 className="title">Convertidor a:</h1>
            <InputsConverted
              divisas={divisasList}
              units={units}
              total={total}
              selectedDivisa={getSelectedDivisa}
              selectedUnity={getUnity}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default App;
