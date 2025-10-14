import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, onQuantityChange }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) {
            const newCount = count + 1;
            setCount(newCount);
            onQuantityChange(newCount);
        }
    };

    const decrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            onQuantityChange(newCount);
        }
    };

    return (
        <div className="item-count-picker">
            <button onClick={decrement} className="count-btn" disabled={count === 1}>
                -
            </button>
            <span className="current-count">{count} Kilo(s)</span>
            <button onClick={increment} className="count-btn" disabled={count >= stock}>
                +
            </button>
            {stock > 0 ? (
                <small className="stock-info">({stock} Kilos disponibles)</small>
            ) : (
                <small className="stock-info no-stock">¡Producto sin stock!</small>
            )}
        </div>
    );
}