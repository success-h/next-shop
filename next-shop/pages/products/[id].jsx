import React from "react";
import { ApiError } from "../../lib/api";
import Image from "next/image";
import { getProduct, getProducts } from "../../lib/products";

export const getStaticPaths = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  try {
    const product = await getProduct(id);

    return {
      props: {
        product,
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (error) {
    if (error instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw error;
  }
};

const ProductDetail = ({ product }) => {
  const { IMG_URL } = process.env;
  const {
    attributes: {
      title,
      description,
      price,
      image: {
        data: {
          attributes: { url },
        },
      },
    },
  } = product;

  return (
    <ul>
      <li>
        <h2 className="text-2xl font-bold">{title}</h2>
        <Image
          width={920}
          height={540}
          src={`http://localhost:1337${url}`}
          alt="new"
        />
        <p>{description}</p>
        <p>{price}</p>
      </li>
    </ul>
  );
};
export default ProductDetail;
