import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import productsArray from './products';

const firebaseConfig = {
    apiKey: "AIzaSyCBAgJDe7sy41Mrcu5SWHcVIE3GMBMCut8",
    authDomain: "syn-verduleria.firebaseapp.com",
    projectId: "syn-verduleria",
    storageBucket: "syn-verduleria.firebasestorage.app",
    messagingSenderId: "1069437381011",
    appId: "1:1069437381011:web:a001a08d13fff2ad166066"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsCollection = collection(db, "products");
const ordersCollection = collection(db, "orders");


export async function getProducts() {
    const snapshot = await getDocs(productsCollection);
    const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productsList;
}

export async function getProductById(id) {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("No existe un producto con ese ID");
    }
}

export async function getProductsByCateg(category) {
    const q = query(productsCollection, where("category", "==", category));
    const snapshot = await getDocs(q);
    const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productsList;
}

export async function seedProducts() {
    console.log("Cargando productos a Firestore...");
    try {
        const snapshot = await getDocs(productsCollection);

        if (snapshot.size === 0) {
            for (const product of productsArray) {
                await addDoc(productsCollection, product); 
            }
            console.log("¡Productos cargados con éxito!");
        } else {
            console.log("Los productos ya fueron cargados, saltando el 'seed'.");
        }
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

export async function createOrder(orderData) {
    try {
        const newOrderRef = await addDoc(ordersCollection, orderData);
        return newOrderRef.id;

    } catch (error) {
        console.error("Error al crear la orden: ", error);
        throw new Error("No se pudo crear la orden de compra.");
    }
}

export default db;