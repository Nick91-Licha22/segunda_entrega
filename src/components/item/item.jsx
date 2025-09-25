import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, title, img, price }) {
  return (
    <div className="item-card">
      <h2 className="item-card-title">{title}</h2>
      <img className="item-card-img" src={img} alt={title} />
      <h3 className="item-card-price">Precio: ${price}</h3>
      <Link to={`/detalle/${id}`}>
        <button className="ver-detalle-btn">Ver Detalle</button>
      </Link>
    </div>
  );
}

export default Item;
