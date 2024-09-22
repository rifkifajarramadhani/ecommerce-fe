import { useState, useEffect } from "react";
import { Category } from "@/lib/types/Category";
import { axiosInstance } from "@/lib/request/axios";
import { Link } from "react-router-dom";

export function NavigationMenus() {
  const [categories, setCategories] = useState<Category[]>();

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/products/categories");

      const categoriesArr = [
        "laptops",
        "mobile-accesories",
        "smartphones",
        "tablets",
        "mens-watches",
        "womens-watches",
      ];
      const categoryNavs = response.data.filter((category: Category) =>
        categoriesArr.includes(category.slug)
      );

      setCategories(categoryNavs);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav
      id="menu-items"
      className="w-full bg-white text-black shadow-md relative"
    >
      <div className="container mx-auto hidden lg:flex w-full justify-between px-6 font-medium">
        <ul className="flex flex-wrap whitespace-nowrap items-center justify-between lg-1/2:space-x-6 w-full list-none">
          {categories?.map((category: Category) => (
            <li key={category.slug} className="group px-6 py-2">
              <Link to={`products/category/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
