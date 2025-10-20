import manzanaRoja from '/img/manzana_roja.jpeg';
import manzanaVerde from '/img/manzana_verde.jpeg';
import naranjas from '/img/naranjas.jpeg';
import ciruelas from '/img/Ciruelas.jpeg';
import frutillas from '/img/Frutillas.jpeg';
import uvas from '/img/Uvas.jpeg';
import banana from '/img/Banana.jpeg';
import kiwi from '/img/Kiwi.jpeg';
import paltas from '/img/paltas.jpeg';
import mandarinas from '/img/mandarinas.jpeg';
import batata from '/img/batata.jpeg';
import berengenas from '/img/berengenas.jpeg';
import cebolla from '/img/cebolla.jpeg';
import cebollaMorada from '/img/cebolla_morada.jpeg';
import choclo from '/img/choclo.jpeg';
import lechuga from '/img/lechuga.jpeg';
import morronRojo from '/img/morron_rojo.jpeg';
import morronVerde from '/img/morron_verde.jpeg';
import papas from '/img/papas.jpeg';
import pepinos from '/img/pepinos.jpeg';
import tomateCherry from '/img/tomate_cherry.jpeg';
import tomateRedondo from '/img/tomate_redondo.jpeg';
import zanahorias from '/img/zanahorias.jpeg';
import uvasBlancas from '/img/uvas_blancas.jpeg';
import uvasRosadas from '/img/uvas_rosadas.jpeg';

const products = [
  { id: 1, title: 'Manzana Roja', price: 2000, img: manzanaRoja, category: 'frutas', description: 'Manzanas rojas frescas y jugosas, ideales para cualquier momento del día.', stock: 25 },
  { id: 2, title: 'Manzana Verde', price: 2200, img: manzanaVerde, category: 'frutas', description: 'Manzanas verdes con un toque ácido, perfectas para ensaladas o postres.', stock: 20 },
  { id: 3, title: 'Naranjas', price: 1500, img: naranjas, category: 'frutas', description: 'Naranjas dulces y llenas de vitamina C, ideales para jugos naturales.', stock: 30 },
  { id: 4, title: 'Ciruelas', price: 1600, img: ciruelas, category: 'frutas', description: 'Ciruelas maduras y dulces, perfectas para comer solas o en mermeladas.', stock: 15 },
  { id: 5, title: 'Frutillas', price: 3000, img: frutillas, category: 'frutas', description: 'Frutillas grandes y aromáticas, un clásico de la fruta fresca.', stock: 18 },
  { id: 6, title: 'Uvas Negras', price: 1800, img: uvas, category: 'frutas', description: 'Racimos de uvas negras, crujientes y dulces.', stock: 22 },
  { id: 7, title: 'Banana', price: 3500, img: banana, category: 'frutas', description: 'Bananas cremosas y energéticas, un snack perfecto para el deporte.', stock: 40 },
  { id: 8, title: 'Kiwi', price: 3600, img: kiwi, category: 'frutas', description: 'Kiwis de alta calidad, con un sabor único y un interior vibrante.', stock: 12 },
  { id: 9, title: 'Paltas', price: 3200, img: paltas, category: 'frutas', description: 'Paltas cremosas y listas para usar, el ingrediente estrella de cualquier tostada.', stock: 10 },
  { id: 10, title: 'Mandarinas', price: 1400, img: mandarinas, category: 'frutas', description: 'Mandarinas fáciles de pelar y deliciosamente dulces.', stock: 35 },
  { id: 11, title: 'Batata', price: 1200, img: batata, category: 'verduras', description: 'Batatas ricas en fibra y con un sabor dulce, ideales para purés.', stock: 50 },
  { id: 12, title: 'Berenjenas', price: 1500, img: berengenas, category: 'verduras', description: 'Berenjenas firmes, ideales para preparar a la parrilla o al horno.', stock: 15 },
  { id: 13, title: 'Cebolla', price: 900, img: cebolla, category: 'verduras', description: 'Cebollas blancas, un básico en cualquier cocina.', stock: 60 },
  { id: 14, title: 'Cebolla Morada', price: 1100, img: cebollaMorada, category: 'verduras', description: 'Cebolla morada, con un sabor más suave y perfecta para ensaladas.', stock: 20 },
  { id: 15, title: 'Choclo', price: 1800, img: choclo, category: 'verduras', description: 'Choclos tiernos, un acompañamiento delicioso para tus comidas.', stock: 25 },
  { id: 16, title: 'Lechuga', price: 1300, img: lechuga, category: 'verduras', description: 'Lechuga fresca y crujiente, la base de tus ensaladas.', stock: 30 },
  { id: 17, title: 'Morrón Rojo', price: 2100, img: morronRojo, category: 'verduras', description: 'Morrón rojo, con un sabor dulce y perfecto para salteados.', stock: 18 },
  { id: 18, title: 'Morrón Verde', price: 2000, img: morronVerde, category: 'verduras', description: 'Morrón verde, con un sabor más intenso y excelente para guisos.', stock: 18 },
  { id: 19, title: 'Papas', price: 800, img: papas, category: 'verduras', description: 'Papas, la verdura más versátil y esencial.', stock: 100 },
  { id: 20, title: 'Pepinos', price: 1000, img: pepinos, category: 'verduras', description: 'Pepinos frescos y crujientes, ideales para ensaladas refrescantes.', stock: 25 },
  { id: 21, title: 'Tomate Cherry', price: 2500, img: tomateCherry, category: 'verduras', description: 'Tomates cherry pequeños y dulces, perfectos para un snack.', stock: 15 },
  { id: 22, title: 'Tomate Redondo', price: 2300, img: tomateRedondo, category: 'verduras', description: 'Tomates redondos maduros, ideales para salsa o ensaladas.', stock: 40 },
  { id: 23, title: 'Zanahorias', price: 950, img: zanahorias, category: 'verduras', description: 'Zanahorias dulces y crujientes, ricas en vitamina A.', stock: 50 },
  { id: 24, title: 'Uvas Blancas', price: 1900, img: uvasBlancas, category: 'frutas', description: 'Uvas blancas sin semillas, deliciosamente dulces y refrescantes.', stock: 22 },
  { id: 25, title: 'Uvas Rosadas', price: 1900, img: uvasRosadas, category: 'frutas', description: 'Uvas rosadas, con un sabor ligeramente floral y dulce.', stock: 22 },
];

export default products;