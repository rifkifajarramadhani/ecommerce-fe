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

const HomePage = () => {
  const [smartphones, setSmartphones] = useState<any>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `/products/category/smartphones`
      );
      console.log(response.data.products);
      setSmartphones(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const productList = smartphones.map((smartphone: any) => {
    return (
      <CarouselItem className="basis-1/5" key={smartphone.id}>
        <ProductListItem smartphone={smartphone} />
      </CarouselItem>
    );
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <p className="p-12">Home Page</p>

      <Carousel>
        <CarouselContent>{productList}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default HomePage;
