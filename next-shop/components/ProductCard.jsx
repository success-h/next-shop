import Link from "next/link";
import Image from "next/image";
const ProductCard = ({ product }) => {
  const { IMG_URL } = process.env;
  const {
    id,
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
  console.log("IMG_URL:", IMG_URL);
  console.log("Url:", url);
  return (
    <div className="border my-4 w-80">
      <Link href={`/products/${product.id}`}>
        <a>
          <Image
            width={320}
            height={240}
            src={`http://localhost:1337${url}`}
            alt="new"
          />
          <div className="p-2 flex justify-between items-baseline">
            <h2 className="text-lg font-bold">{title}</h2>
            <span>${price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
