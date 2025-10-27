import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cartContext from '../components/context/cartContext'; 
import './OffersView.css'; 
import Swal from 'sweetalert2';

const OFFERS_DATA = [
    {
        id: 'OFR_FRUTAS',
        title: 'Oferta de Frutas Frescas',
        category: 'frutas',
        calculatedTotalPrice: 13800, 
        offerPrice: 12000, 
        items: [
            { id: 'banana-oferta', name: 'Banana', quantity: '2 Kilo(s)', pricePerKilo: 4600, subtotal: 9200, img: '/img/Banana.jpeg' }, 
            { id: 'mandarina-oferta', name: 'Mandarina', quantity: '2 Kilo(s)', pricePerKilo: 2300, subtotal: 4600, img: '/img/mandarinas.jpeg' },
            { id: 'manzana-oferta', name: 'Manzana Roja', quantity: '2 Kilo(s)', pricePerKilo: 2500, subtotal: 5000, img: '/img/manzana_roja.jpeg' },
        ],
    },
    {
        id: 'OFR_VERDURAS',
        title: 'Oferta Esencial de Verduras',
        category: 'verduras',
        calculatedTotalPrice: 5300, 
        offerPrice: 4800, 
        items: [
            { id: 'papa-oferta', name: 'Papas', quantity: '2 Kilo(s)', pricePerKilo: 883, subtotal: 1766, img: '/img/papas.jpeg' },
            { id: 'cebolla-oferta', name: 'Cebolla', quantity: '2 Kilo(s)', pricePerKilo: 883, subtotal: 1766, img: '/img/cebolla.jpeg' },
            { id: 'zanahoria-oferta', name: 'Zanahoria', quantity: '2 Kilo(s)', pricePerKilo: 884, subtotal: 1768, img: '/img/zanahorias.jpeg' },
        ],
    },
];

const OffersView = () => {
    const { clearCart, addToCart } = useContext(cartContext);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const handleCheckout = (offer) => {
        
        Swal.fire({
            title: `¿Confirmar Oferta "${offer.title}"?`,
            text: `Se limpiará tu carrito actual para proceder solo con esta oferta de $${offer.offerPrice.toLocaleString('es-AR')}.`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí, Comprar Oferta',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();

                const offerProduct = {
                    id: offer.id,
                    title: `Oferta: ${offer.title}`,
                    price: offer.offerPrice, 
                    count: 1, 
                    img: offer.items[0].img, 
                    isOffer: true, 
                    offerDetails: offer.items, 
                };

                addToCart(offerProduct, true); 

                navigate('/cart');
            }
        });
    };

    return (
        <div className="cart-container offers-view-container"> 
            
            <button 
                onClick={handleGoBack} 
                className="btn-volver ver-detalle-btn"
                style={{ marginBottom: '20px' }}
            >
                ← Volver al Menú Principal
            </button>
            
            <h2 className="offers-main-title">🛒 Ofertas Especiales de la Semana </h2>
            
            <div className="offers-grid">
                {OFFERS_DATA.map((offer) => (
                    <div key={offer.id} className="offer-card-full-width">
                        <h3 className="offer-card-title">{offer.title}</h3>
                        
                        <div className="offer-items-list">
                            {offer.items.map((item) => (
                                <div key={item.id} className="cart-item-card offer-item-detail">
                                    <img width="100" src={item.img} alt={item.name} className="cart-item-img" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>Cantidad: **{item.quantity}**</p>
                                        <p>Precio (por Kilo): ${item.pricePerKilo}</p>
                                        <p className="item-subtotal">Subtotal: **$ {item.subtotal}**</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="cart-summary offer-summary">
                            <h3 className="original-price-strike">Total Normal: <span className="strikethrough-text">$ {offer.calculatedTotalPrice.toLocaleString('es-AR')}</span></h3>
                            
                            <div className="offer-checkout-section">
                                <p className="offer-final-label">Precio Final por Oferta:</p>
                                <h3 className="offer-final-price">**$ {offer.offerPrice.toLocaleString('es-AR')}**</h3>
                                <button 
                                    onClick={() => handleCheckout(offer)} 
                                    className="btn-checkout" 
                                    style={{ marginLeft: '1rem' }}
                                >
                                    Ir a Pagar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersView;