import products from './products';

export function getMockAPIData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 700);
  });
}

export function getProductById(idRequested) {
  const reqItem = products.find(item => item.id === Number(idRequested));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (reqItem) {
        resolve(reqItem);
      } else {
        reject("Producto no encontrado");
      }
    }, 700);
  });
}

export function getProductsByCateg(categRequested) {
  const productsFilter = products.filter(item => item.category === categRequested);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productsFilter.length >= 1) {
        resolve(productsFilter);
      } else {
        reject("No encontramos productos para esa categoría");
      }
    }, 700);
  });
}