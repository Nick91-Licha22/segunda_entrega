import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import './ContactView.css';

const ContactView = () => {
    const navigate = useNavigate();

    const whatsappNumber = '01151613420';
    const emailAddress = 'Nicolas.n.andino@gmail.com';
    const address = 'Loma Hermosa - San Martin';
    
    const handleWhatsappClick = () => {
        window.open(`https://wa.me/549${whatsappNumber}`, '_blank');
    };

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="contact-view-container">
            
            <div className="contact-card">
                <img 
                    src="/img/logoverduleria.png" 
                    alt="Logo de la Verdulería" 
                    className="contact-logo" 
                />
                <h2 className="contact-title">¡Contáctanos!</h2>
                <p className="contact-subtitle">Estamos listos para tomar tu pedido.</p>

                <div className="contact-info-list">
                    <div className="contact-item" onClick={handleWhatsappClick}>
                        <FaWhatsapp className="contact-icon whatsapp-icon" />
                        <div className="info-details">
                            <h4>WhatsApp</h4>
                            <p>{whatsappNumber}</p>
                            <small>(Haz clic para chatear)</small>
                        </div>
                    </div>

                    <a href={`mailto:${emailAddress}`} className="contact-item">
                        <FaEnvelope className="contact-icon email-icon" />
                        <div className="info-details">
                            <h4>Correo Electrónico</h4>
                            <p>{emailAddress}</p>
                        </div>
                    </a>

                    <div className="contact-item location-item">
                        <FaMapMarkerAlt className="contact-icon location-icon" />
                        <div className="info-details">
                            <h4>Dirección</h4>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={handleGoBack} 
                className="btn-volver ver-detalle-btn"
                style={{ margin: '30px auto', display: 'block', maxWidth: '300px' }} 
            >
                ← Volver al Menú Principal
            </button>
            
        </div>
    );
};

export default ContactView;