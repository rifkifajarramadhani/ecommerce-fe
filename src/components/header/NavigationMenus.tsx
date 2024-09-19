import { useState, useRef, useEffect } from "react";
import { navs } from "@/lib/dummy/nav";
import { Nav } from "@/lib/types/Nav";
import NavigationSubMenus from "./NavigationSubMenus"; // Assuming SubMenu component
import { Category } from "@/lib/types/Category";

export function NavigationMenus() {
  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>(
    {}
  ); // Track open/closed states
  const parentLeftPositions = useRef<number>(0); // Store left positions for submenus

  const toggleDropdown = (nav: Category) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [nav.slug]: !prevStates[nav.slug],
    }));

    if (!nav.children) {
      // Handle non-dropdown navigation items (optional)
      return;
    }

    const currentElement = document.getElementById(nav.slug);
    if (currentElement) {
      parentLeftPositions.current = currentElement.getBoundingClientRect().left;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const nav = document.getElementById("menu-items");
    if (nav && !nav.contains(event.target as Node)) {
      setDropdownStates({});
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav id="menu-items" className="bg-white text-black">
      <div className="container mx-auto flex w-full justify-between px-6 font-medium">
        <ul className="flex items-center justify-between lg-1/2:space-x-6 w-full list-none">
          {navs.map((nav: Category) => (
            <li key={nav.slug} className="group px-6 py-2">
              <button
                className="focus:outline-none uppercase"
                id={nav.slug}
                onClick={() => toggleDropdown(nav)}
              >
                {nav.display_title}
                {nav.children && <i className="fas fa-chevron-down ml-1"></i>}
              </button>

              {dropdownStates[nav.slug] && nav.children && (
                <NavigationSubMenus
                  parentCategory={nav} // Assuming `parentCategory` prop in SubMenu
                  categories={nav.children} // Assuming `categories` prop in SubMenu
                  level={1}
                  parentLeftPosition={`${parentLeftPositions.current}px`} // Position submenus correctly
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
