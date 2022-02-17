import { fetchJson } from "./api";

const { CMS_URL } = process.env;
const { IMG_URL } = process.env;

export async function getProduct(id) {
  const data = await fetchJson(`${CMS_URL}products/${id}?populate=image`);
  console.log(IMG_URL);
  const product = await data.data;
  return product;
}

export async function getProducts() {
  const data = await fetchJson(`${CMS_URL}products?populate=image`);
  const products = await data.data;
  return products;
}

// function stripProduct(product) {
//   return {
//     id: product.id,
//     attribute: {
//       title: product.attributes.title,
//       description: product.attributes.description,
//       price: product.attributes.price,
//       image: product.attributes.image,
//     },
//   };
// }
