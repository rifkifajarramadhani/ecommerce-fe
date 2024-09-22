import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type Smartphone = {
  availabilityStatus: string;
  brand: string;
  category: "smartphones";
  description: string;
  dimensions: Object;
  discountPercentage: 11.85;
  id: 121;
  images: string[];
  meta: Object;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: string[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: string;
};

type ProductListItemProps = {
  smartphone: Smartphone;
};

export const ProductListItem = (props: ProductListItemProps) => {
  const { smartphone } = props;

  return (
    <Link
      to={"#"}
      className="relative w-full h-[315px] border border-gray-825 p-3 flex flex-col justify-between overflow-hidden"
      key={smartphone.id}
    >
      {smartphone.discountPercentage >= 0 && (
        <div className="absolute right-2 top-4">
          <span className="font-extrabold text-xl bg-red-500 text-white px-5 py-2 uppercase">
            Save
          </span>
        </div>
      )}

      <div className="flex justify-center items-center object-contain h-4/6">
        <img src={smartphone.images[0]} className="h-full object-contain" />
      </div>

      {smartphone.discountPercentage >= 0 && (
        <div className="flex flex-col justify-end items-start h-2/6">
          <div className="flex flex-col items-start mt-2">
            <div className="flex items-start space-x-1 text-gray-400 strike-center">
              <span className="text-[19px] font-bold leading-none">
                WAS {smartphone.price.toFixed(2).split(".")[0]}
              </span>
              <span className="text-[14px] font-bold leading-none">
                {smartphone.price.toFixed(2).split(".")[1]}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start space-x-1">
        <span className="font-sans text-[40px] lg:text-[42px] font-bold leading-none">
          {
            (
              smartphone.price -
              (smartphone.discountPercentage / 100) * smartphone.price
            )
              .toFixed(2)
              .split(".")[0]
          }
        </span>

        <div className="flex flex-col">
          <span className="font-sans text-3xl font-bold leading-none">
            {
              (
                smartphone.price -
                (smartphone.discountPercentage / 100) * smartphone.price
              )
                .toFixed(2)
                .split(".")[1]
            }
          </span>
        </div>
      </div>

      <div className="font-sans-condensed text-sm lg:text-xl font-bold text-black">
        {smartphone.title}
      </div>

      <div className="absolute bottom-2 right-2">
        <button className="focus:outline-none p-2 rounded-full bg-black">
          <Heart className="text-white" />
        </button>
      </div>
    </Link>
  );
};
