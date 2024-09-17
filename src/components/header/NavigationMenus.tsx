import * as React from "react";
import { navs } from "@/lib/dummy/nav";
import { Nav } from "@/lib/types/nav";
import NavigationSubMenus from "./NavigationSubMenus";

export function NavigationMenus() {
  return (
    <nav id="menu-items" className="bg-white text-black">
      <div className="container mx-auto flex w-full justify-between px-6 font-medium">
        <ul className="flex items-center justify-between lg-1/2:space-x-6 w-full list-none">
          {navs.map((nav: Nav) => (
            <li key={nav.slug} className="group px-6 py-2">
              <button className="focus:outline-none uppercase" id={nav.slug}>
                {nav.display_title}
                <i className="fas fa-chevron-down ml-1"></i>
              </button>

              {/* {nav.children && <NavigationSubMenus />} */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
