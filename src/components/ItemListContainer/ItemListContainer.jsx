import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts, getProductsByCateg } from '../../data/firebase'; 
import Item from '../item/item.jsx';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categParam } = useParams();

    const displayTitle = categParam
        ? categParam.charAt(0).toUpperCase() + categParam.slice(1)
        : greeting;

    useEffect(() => {
        setIsLoading(true);

        const fetchProducts = categParam ? getProductsByCateg(categParam) : getProducts();

        fetchProducts
            .then(productList => {
                setProducts(productList);
            })
            .catch(error => {
                console.error("Error solicitando los datos", error);
                alert("Algo salió mal buscando los productos");
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [categParam]);

    return (
        <div className="item-list-container">
            <h2>{displayTitle}</h2>
            {isLoading ? (
                <p className="item-list-container__loading">Cargando productos...</p>
            ) : (
                <>
                    <div className="product-grid">
                        {products.map(prod => (
                            <Item key={prod.id} {...prod} />
                        ))}
                    </div>


                    {categParam && (
                        <div className="btn-return-link-wrapper">
                            <Link to="/">
                                <button className="btn-return-to-home">
                                    « Volver al Menú Principal
                                </button>
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}