import React from "react";
import { ApiError } from "../../lib/api";
import Image from "next/image";
import { getProduct, getProducts } from "../../lib/products";
import Page from "../../components/Page";

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
    <Page title={title}>
      <li className="grid lg:grid-cols-2 p-10">
        <Image
          width={640}
          height={480}
          src={`http://localhost:1337${url}`}
          alt="new"
          className=""
        />
        <div className="w-sm p-10 m-auto">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </li>
    </Page>
  );
};
export default ProductDetail;
