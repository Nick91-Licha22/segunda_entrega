import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../data/firebase"; 
import { useEffect, useState, useContext } from "react";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import ItemCount from "../ItemCount/ItemCount"; 
import "./ItemDetailContainer.css";
import cartContext from "../context/cartContext"; 

function ItemDetailContainer() {
    const { idParam } = useParams();
    const [product, setProduct] = useState({ loading: true, stock: 0 });
    const [quantityToAdd, setQuantityToAdd] = useState(1); 

    const { addToCart } = useContext(cartContext);

    useEffect(() => {
        setProduct({ loading: true, stock: 0 });
        setQuantityToAdd(1); 

        getProductById(idParam)
            .then(response => {
                setProduct({ ...response, loading: false });
                setQuantityToAdd(response.stock > 0 ? 1 : 0); 
            })
            .catch(error => {
                setProduct({ loading: false, error: true });
                console.error("Error al buscar producto:", error);
            });
    }, [idParam]);

    if (product.loading) {
        return <p className="item-card-loading">Cargando producto...</p>;
    }
    
    if (product.error) {
        return <p className="item-card-loading">⚠️ Error: Producto no encontrado.</p>;
    }

    const categoryPath = `/category/${product.category}`;
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);

    const handleAddToCart = () => {
        if (quantityToAdd > 0) {
            const itemWithCount = {
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.img,
                count: quantityToAdd,
                stock: product.stock, 
            };
            addToCart(itemWithCount);
        }
    };

    return (
        <div className="item-detail-container">
            <div className="item-card-detail">
                <h2 className="item-card-title">{product.title}</h2>
                <img className="item-card-img-detail" src={product.img} alt={product.title} />
                <p className="item-description">{product.description}</p>
                <h3 className="item-card-price">Precio: ${product.price} / Kilo</h3>

                <ItemCount
                    stock={product.stock}
                    onQuantityChange={setQuantityToAdd}
                />

                <ButtonAddToCart 
                    onAddToCart={handleAddToCart} 
                    text={product.stock > 0 ? "Agregar al Carrito" : "Sin Stock"}
                    disabled={quantityToAdd === 0 || product.stock === 0} 
                />

                <div className="return-buttons-wrapper">
                    {categoryPath && (
                        <Link to={categoryPath}>
                            <button className="btn-return-to-category">
                                « Volver a {categoryName}
                            </button>
                        </Link>
                    )}

                    <Link to="/">
                        <button className="btn-return-to-home-from-detail">
                            Ir al Menú Principal
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default ItemDetailContainer;