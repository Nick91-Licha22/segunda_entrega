import "./PesoPick.css";
export default function PesoPick({ selectedQuantity, onSelect }) {
  const options = ["1/2 Kilo", "1 Kilo", "2 Kilos", "3 Kilos"];

  return (
    <div className="cantidad-container">
      <p>Elige la cantidad:</p>
      <div className="cantidad-buttons">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)} 
            className={selectedQuantity === option ? "selected-quantity" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="seleccion-text">Seleccionaste: {selectedQuantity}</p>
    </div>
  );
}