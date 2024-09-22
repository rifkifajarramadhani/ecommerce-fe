import { ProductListItem } from "@/components/ProductListItem";
import { axiosInstance } from "@/lib/request/axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const [smartphones, setSmartphones] = useState<any>([]);
  const [laptops, setLaptops] = useState<any>([]);

  const fetchSmartphones = async () => {
    try {
      const response = await axiosInstance.get(
        `/products/category/smartphones?limit=5`
      );

      setSmartphones(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLaptops = async () => {
    try {
      const response = await axiosInstance.get(
        `/products/category/laptops?limit=5`
      );

      setLaptops(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const smartphonesList = smartphones.map((product: any) => {
    return (
      <CarouselItem
        className="basis-1/2 md:basis-1/3 lg:basis-1/5"
        key={product.id}
      >
        <ProductListItem product={product} />
      </CarouselItem>
    );
  });

  const laptopsList = laptops.map((product: any) => {
    return (
      <CarouselItem
        className="basis-1/2 md:basis-1/3 lg:basis-1/5"
        key={product.id}
      >
        <ProductListItem product={product} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    fetchSmartphones();
    fetchLaptops();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center relative max-h-[400px] lg:h-[400px] overflow-hidden mb-8">
        <picture>
          <img
            src="https://utfs.io/f/KIQHcaf9YatfKATDW9of9Yatfox2b1yzSAn5863rpqTMgIWG"
            className="block mx-auto my-auto w-full object-cover"
          />
        </picture>

        <div className="absolute bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-10 md:top-0 md:translate-x-0 md:translate-y-0 h-[300px] lg:h-[300px] md:max-w-3xl md:mt-[50px] max-w-sm lg:max-w-4xl w-full flex flex-col justify-between text-white z-20 py-10 lg:py-8 px-10">
          <h1 className="text-center md:text-left mb-2 lg:text-[64px] leading-[1em] text-7xl md:text-[52px] uppercase font-bold">
            Lorem, ipsum.
          </h1>

          <p className="text-center md:text-left text-2xl md:text-3xl font-sans-condensed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam
            sapiente dignissimos deleniti nostrum nihil.
          </p>

          <Link to={""}>
            <Button variant={"whiteOnRed"}>Shop All</Button>
          </Link>
        </div>
      </div>

      <div className="smartphones flex flex-col uppercase mb-8">
        <div className="flex space-x-5">
          <h1 className="font-bold">Smartphones</h1>
          <Link to={"/products/category/smartphones"}>Shop All</Link>
        </div>

        <Carousel>
          <CarouselContent>{smartphonesList}</CarouselContent>
        </Carousel>
      </div>

      <div className="flex mb-10">
        <div className="bg-[#ED0F00] bg-no-repeat bg-cover md:bg-none w-full md:w-5/12 py-16 md:py-0">
          <div className="flex flex-col justify-center items-center bg-gray-900 md:bg-black w-full h-[350px] text-white text-center md:text-left px-8 lg:px-12">
            <p className="font-semibold uppercase text-[40px] leading-[40px] mb-3">
              Get much more with the new{" "}
              <span className="text-[#ED0F00]">Smartbuy</span>
            </p>

            <p className="font-sans-condensed text-xl leading-10 mb-3 w-full">
              View your points balances and exclusive offers on the SmartBuy
              customer portal.
            </p>

            <a href="#" className="btn-smartbuy">
              View your <span>Smartbuy</span> account here
            </a>
          </div>
        </div>

        <div className="hidden md:flex bg-[#ED0F00] bg-no-repeat bg-cover w-7/12 h-[350px]"></div>
      </div>

      <div className="laptops flex flex-col uppercase mb-8">
        <div className="flex space-x-5">
          <h1 className="font-bold">Laptops</h1>
          <Link to={"/products/category/laptops"}>Shop All</Link>
        </div>

        <Carousel>
          <CarouselContent>{laptopsList}</CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;
