import { useParams } from "react-router-dom";
import { getProductById } from "../../data/mockAPI";
import { useEffect, useState, useContext } from "react";
import PesoPick from "../PesoPick/PesoPick";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import "./ItemDetailContainer.css";
import cartContext from "../context/cartContext";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true });
  
  const [selectedQuantity, setSelectedQuantity] = useState("1 Kilo"); 

  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    getProductById(idParam)
      .then(response => {
        setProduct(response);
        setSelectedQuantity("1 Kilo"); 
      })
      .catch(error => alert(error));
  }, [idParam]);

  if (product.loading) {
    return <p>Cargando producto...</p>;
  }

  const handleAddToCart = () => {
    const itemWithDetails = {
      ...product,
      quantityLabel: selectedQuantity, 
      baseId: product.id 
    };

    addToCart(itemWithDetails);
  };

  return (
    <div className="item-detail-container">
      <div className="item-card-detail">
        <h2 className="item-card-title">{product.title}</h2>
        <img className="item-card-img-detail" src={product.img} alt={product.title} />
        <p className="item-description">{product.description}</p>
        <h3 className="item-card-price">Precio: ${product.price} / Kilo</h3>
        
        <PesoPick 
          selectedQuantity={selectedQuantity} 
          onSelect={setSelectedQuantity} 
        />
        
        <ButtonAddToCart onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;