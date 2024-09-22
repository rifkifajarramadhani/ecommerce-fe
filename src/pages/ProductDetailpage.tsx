import { axiosInstance } from "@/lib/request/axios";
import { Product } from "@/lib/types/Product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${params.id}`);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const tags = product?.tags.map((tag, i) => {
    return (
      <div
        className="flex items-center justify-center mx-2 w-44 font-bold text-base py-2 uppercase cursor-pointer"
        key={i}
      >
        {tag}
      </div>
    );
  });

  const images = product?.images.map((image, i) => {
    return (
      <CarouselItem className="max-h-[500px]" key={i}>
        <img src={image} alt="h-full" />
      </CarouselItem>
    );
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full container">
      <div className="w-full lg:w-1/2">
        <div className="flex lg:hidden justify-center space-x-4">{tags}</div>

        <Carousel>
          <CarouselContent>{images}</CarouselContent>
        </Carousel>
      </div>

      <div className="w-full lg:w-1/2 pt-0 lg:pt-10">
        <div className="hidden lg:flex">{tags}</div>

        <div className="flex lg:hidden justify-center lg:justify-start font-sans-condensed text-6xl mb-4">
          {product?.title}
        </div>

        <div className="flex justify-center lg:justify-start my-3">
          <span className="text-[62px] lg:text-[82px] font-sans-condensed font-bold leading-none">
            {Math.floor(product?.price as number).toString()}
          </span>

          <span className="text-6xl lg:text-[38px] block mt-3 font-sans-condensed font-bold leading-none">
            {
              ((product?.price as number) % 1)
                .toFixed(2)
                .toString()
                .split(".")[1]
            }
          </span>
        </div>

        <div className="flex lg:hidden justify-center items-center mb-8">
          <div className="flex items-center w-1/3">quantity</div>
          <button className="btn btn-red text-white h-12 w-2/3 ml-6 font-bold text-xl uppercase">
            Add to Cart
          </button>
        </div>

        <hr className="block lg:hidden border border-gray-775 mb-6"></hr>

        <div className="hidden lg:block text-4xl font-sans-condensed font-semibold ps-2 mb-4">
          {product?.title}
        </div>

        <div className="font-sans-condensed font-medium tracking-[0.01em] text-black text-center lg:text-left text-xl leading-5 ps-2 mb-8 lg:mb-6">
          {product?.description}
        </div>

        <hr className="block lg:hidden border border-gray-775 mb-6" />

        <div className="hidden lg:flex items-center ps-2 mb-8">
          <div className="flex items-center">quantity</div>
          <button className="btn btn-red text-white h-12 w-2/3 ml-6 font-bold text-xl uppercase">
            Add to Cart
          </button>
        </div>

        <hr className="hidden lg:block border border-gray-775 mb-6 lg:mb-3" />
      </div>
    </div>
  );
};

export default ProductDetailPage;
