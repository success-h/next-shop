import { getProducts } from "../lib/products";
import ProductCard from "../components/ProductCard";
import Page from "../components/Page";

const IMG_URL = process.env.IMG_URL;

export const getStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
};

export default function HomePage({ products }) {
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
