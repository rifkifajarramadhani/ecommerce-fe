import { Product } from "@/lib/types/Product";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type ProductListItemProps = {
  product: Product;
};

export const ProductListItem = (props: ProductListItemProps) => {
  const { product } = props;

  return (
    <Link
      to={`/products/${product.id}`}
      className="relative w-full h-[390px] border border-gray-825 p-3 flex flex-col justify-start overflow-hidden"
      key={product.id}
    >
      {product.discountPercentage >= 0 && (
        <div className="absolute right-2 top-4">
          <span className="font-extrabold text-xl bg-red-500 text-white px-5 py-2 uppercase">
            Save
          </span>
        </div>
      )}

      <div className="flex justify-center items-center object-contain h-4/6">
        <img src={product.images[0]} className="h-full object-contain" />
      </div>

      <div className="flex flex-col justify-center items-start h-2/6">
        {product.discountPercentage >= 0 && (
          <div className="flex flex-col items-start mt-2">
            <div className="flex items-start space-x-1 text-gray-400 strike-center">
              <span className="text-[19px] font-bold leading-none">
                WAS {product.price.toFixed(2).split(".")[0]}
              </span>
              <span className="text-[14px] font-bold leading-none">
                {product.price.toFixed(2).split(".")[1]}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-start space-x-1">
          <span className="font-sans text-[40px] lg:text-[42px] font-bold leading-none">
            {
              (
                product.price -
                (product.discountPercentage / 100) * product.price
              )
                .toFixed(2)
                .split(".")[0]
            }
          </span>

          <div className="flex flex-col">
            <span className="font-sans text-3xl font-bold leading-none">
              {
                (
                  product.price -
                  (product.discountPercentage / 100) * product.price
                )
                  .toFixed(2)
                  .split(".")[1]
              }
            </span>
          </div>
        </div>

        <div className="font-sans-condensed text-sm lg:text-base font-bold text-black pe-6">
          {product.title}
        </div>
      </div>

      <div className="absolute bottom-2 right-2">
        <button className="focus:outline-none p-2 rounded-full bg-black">
          <Heart className="text-white" />
        </button>
      </div>
    </Link>
  );
};
