# S&N Verdulería (Proyecto E-commerce React)
Este es el proyecto final para el curso de React. Se trata de un e-commerce completamente funcional para una verdulería, construido como una Single Page Application (SPA).
El sitio permite a los usuarios ver un catálogo de productos (frutas y verduras), filtrar por categorías, ver el detalle de un ítem, agregarlo a un carrito de compras y finalizar la compra.
La aplicación se conecta a **Firebase (Firestore)** para obtener el catálogo de productos y para generar una orden de compra con los datos del comprador y los productos del carrito.

# Características Principales

**Catálogo de Productos:** Carga de productos desde Firebase Firestore.
**Filtro por Categorías:** Rutas dinámicas para `/category/frutas` y `/category/verduras`.
**Detalle de Producto:** Vista de detalle individual con validación de stock.
**Carrito de Compras:** Lógica completa del carrito (agregar, sumar, restar, eliminar) usando `useContext`.
**Checkout:** Formulario de checkout (implementado con SweetAlert2) que genera una orden de compra en Firestore y devuelve un ID de orden al usuario.
**Rutas Adicionales:** Incluye una sección de "Ofertas" y "Contacto".
**Diseño:** Estilos personalizados con CSS puro y fuentes de Google Fonts.

# Tecnologías Utilizadas

**React** (con Vite)
**React Router Dom** (para la navegación SPA)
**Firebase (Firestore)** (como base de datos)
**SweetAlert2** (para notificaciones y el formulario de checkout)
**CSS Puro**

# Cómo Ejecutar el Proyecto
Necesitarás tener [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/download/) instalados en tu computadora.

1.**Clonar el repositorio:**
    ```bash
    git clone https://[URL-DE-TU-REPOSITORIO].git
    ```
2.**Ingresar a la carpeta del proyecto:**
    ```bash
    cd [NOMBRE-DE-LA-CARPETA-DEL-PROYECTO]
    ```
3.**Instalar las dependencias:**
    ```bash
    npm install
    ```
4.**Crear el archivo de entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto y agrega tus credenciales de Firebase:
    ```
    VITE_PUBLIC_FIREBASE_API_KEY=...
    VITE_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    VITE_PUBLIC_FIREBASE_PROJECT_ID=...
    VITE_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    VITE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    VITE_PUBLIC_FIREBASE_APP_ID=...
    ```
5.**Correr la aplicación:**
    ```bash
    npm run dev
    ```