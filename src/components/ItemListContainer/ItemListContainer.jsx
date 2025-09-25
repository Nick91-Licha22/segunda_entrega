import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../item/item.jsx';
import { getMockAPIData, getProductsByCateg } from '../../data/mockAPI';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categParam } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (categParam) {
      getProductsByCateg(categParam)
        .then(productsByCateg => setProducts(productsByCateg))
        .catch(error => alert(error))
        .finally(() => setIsLoading(false));
    } else {
      getMockAPIData()
        .then(productList => {
          setProducts(productList);
        })
        .catch(error => {
          console.log("Error solicitando los datos", error);
          alert("Algo salió mal buscando los productos");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [categParam]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {isLoading ? (
        <p className="item-list-container__loading">Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {products.map(prod => (
            <Item key={prod.id} {...prod} />
          ))}
        </div>
      )}
    </div>
  );
}