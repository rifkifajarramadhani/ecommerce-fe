import { useState } from "react";

const NavigationSubMenus = () => {
  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>(
    {}
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [parentLeftPosition, setParentLeftPosition] = useState(0);

  const toggleDropdown = (category: Nav) => {
    if (!category.children.length) {
      window.location.href = `/category/${category.slug}`;
      return;
    }

    const isActive = dropdownStates[category.slug];
    setDropdownStates({});

    if (!isActive) {
      setDropdownStates(category.slug) = true;
      activeCategory.value = category.slug;
    } else {
      activeCategory.value = null;
    }

    const currentElement = document.getElementById(category.slug);

    if (currentElement) {
      const rect = currentElement.getBoundingClientRect();
      parentLeftPosition.value = rect.left;
    }
  };
  return (
    <div className="submenu absolute bg-white text-black py-2 z-10 min-w-[200px] min-h-[400px]">
      <div className="flex justify-between items-center">
        <a
          href="'/category/' + props.parentSlug"
          className="w-full block text-left hover:underline focus:outline-none py-3 uppercase font-bold min-w-[200px] cursor-pointer"
        ></a>
        <i className="fas fa-chevron-right ml-1 pe-4"></i>
      </div>

      <ul className="space-y-2 mt-3 w-full list-none">
        <li
          v-for="category in categories"
          key="category.slug"
          className="group"
        >
          <div className="flex justify-between items-center">
            <button className="w-full text-left hover:underline focus:outline-none flex justify-between py-1 uppercase pe-8"></button>
            <i className="fas fa-chevron-right ml-1 pe-4"></i>
          </div>

          <NavigationSubMenus className="left-full top-0 !bg-gray-550" />
        </li>
      </ul>
    </div>
  );
};

export default NavigationSubMenus;
