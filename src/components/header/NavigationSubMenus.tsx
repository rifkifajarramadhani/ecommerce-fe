import { useState, useRef } from "react";
import { Category } from "@/lib/types/Category";

interface NavigationSubMenusProps {
  categories: Category[] | undefined;
  parentCategory: Category;
  level: number;
  parentLeftPosition: string;
}

export default function NavigationSubMenus(props: NavigationSubMenusProps) {
  const { categories, parentCategory, level, parentLeftPosition } = props;

  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>(
    {}
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = (category: Category) => {
    const newSlug = `${parentCategory.slug || ""}/${category.slug}`;

    if (!category.children?.length) {
      window.location.href = `/category/${newSlug}`;
      return;
    }

    setDropdownStates((prevStates) => ({
      ...prevStates,
      [newSlug]: !prevStates[newSlug],
    }));

    // Close other dropdowns at the same level and deeper levels
    Object.keys(dropdownStates).forEach((key) => {
      if (key !== newSlug && key.split("/").length >= level + 1) {
        setDropdownStates((prevStates) => ({
          ...prevStates,
          [key]: false,
        }));
      }
    });
  };

  const isDropdownOpen = (slug: string) =>
    !!dropdownStates[`${parentCategory.slug || ""}/${slug}`];

  return (
    <div
      ref={dropdownRef}
      style={{ paddingLeft: parentLeftPosition }}
      className="submenu absolute bg-white text-black py-2 z-10 min-w-[200px] min-h-[400px]"
    >
      <div className="flex justify-between items-center">
        <a
          href={`/category/${parentCategory.slug}`}
          className="w-full block text-left hover:underline focus:outline-none py-3 uppercase font-bold min-w-[200px] cursor-pointer"
        >
          {parentCategory.title}
        </a>
        <i className="fas fa-chevron-right ml-1 pe-4"></i>
      </div>

      <hr className="border-1 border-gray-775 w-[92.5%]"></hr>

      <ul className="space-y-2 mt-3 w-full list-none">
        {categories &&
          categories.map((category) => (
            <li key={category.slug} className="group">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleDropdown(category)}
                  onMouseEnter={() => toggleDropdown(category)}
                  className={`w-full text-left hover:underline focus:outline-none flex justify-between py-1 uppercase pe-8 ${
                    isDropdownOpen(category.slug) ? "font-bold" : "font-medium"
                  }`}
                >
                  {category.display_title}
                </button>
                {category.children?.length && (
                  <i className="fas fa-chevron-right ml-1 pe-4"></i>
                )}
              </div>

              {isDropdownOpen(category.slug) && (
                <NavigationSubMenus
                  categories={category.children}
                  parentCategory={category}
                  level={level + 1}
                  parentLeftPosition={`${parentLeftPosition}px`}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
