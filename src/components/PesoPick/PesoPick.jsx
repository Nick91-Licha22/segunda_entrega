import { useState } from "react";
import "./PesoPick.css";

export default function PesoPick() {
  const [cantidad, setCantidad] = useState("1 Kilo");

  return (
    <div className="cantidad-container">
      <p>Elige la cantidad:</p>
      <div className="cantidad-buttons">
        <button onClick={() => setCantidad("1/2 Kilo")}>1/2 Kilo</button>
        <button onClick={() => setCantidad("1 Kilo")}>1 Kilo</button>
        <button onClick={() => setCantidad("2 Kilos")}>2 Kilos</button>
      </div>
      <p className="seleccion-text">Seleccionaste: {cantidad}</p>
    </div>
  );
}