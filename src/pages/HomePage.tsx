import { ProductListItem } from "@/components/ProductListItem";
import { axiosInstance } from "@/lib/request/axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const [smartphones, setSmartphones] = useState<any>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `/products/category/smartphones?limit=5`
      );

      setSmartphones(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const productList = smartphones.map((smartphone: any) => {
    return (
      <CarouselItem
        className="basis-1/2 md:basis-1/3 lg:basis-1/5"
        key={smartphone.id}
      >
        <ProductListItem smartphone={smartphone} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center relative max-h-[400px] lg:h-[400px] overflow-hidden mt-2 mb-8">
        <picture>
          <img
            src="https://utfs.io/f/KIQHcaf9YatfKATDW9of9Yatfox2b1yzSAn5863rpqTMgIWG"
            className="block mx-auto my-auto w-full object-cover"
          />
        </picture>

        <div className="absolute bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-10 md:top-0 md:translate-x-0 md:translate-y-0 h-[300px] lg:h-[300px] md:max-w-3xl md:mt-[50px] max-w-sm lg:max-w-4xl w-full flex flex-col text-white z-[100] py-10 lg:py-8 px-10">
          <h1 className="text-center md:text-left mb-2 lg:text-[64px] leading-[1em] text-7xl md:text-[52px] uppercase">
            Lorem, ipsum.
          </h1>

          <p className="text-center md:text-left text-2xl md:text-3xl font-sans-condensed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum
            ipsa sunt in, quam cum incidunt ratione quas reprehenderit
            distinctio sint repellat, sequi velit impedit ut recusandae, nam
            architecto iste?
          </p>

          <Link to={""}>
            <Button>Shop All</Button>
          </Link>
        </div>
      </div>
      <div className="smartphones flex flex-col uppercase mb-8">
        <div className="flex space-x-5">
          <h1 className="font-bold">Smartphones</h1>
          <Link to={"/products/category/smartphones"}>Shop All</Link>
        </div>

        <Carousel>
          <CarouselContent>{productList}</CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;
