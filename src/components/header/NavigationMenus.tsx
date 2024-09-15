"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navs } from "@/lib/dummy/nav";
import { Nav } from "@/lib/types/nav";

const NestedNavigationMenu: React.FC<{ items: Nav[] }> = ({ items }) => (
  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
    {items.map((item) => (
      <li key={item.id}>
        {item.children && item.children.length > 0 ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NestedNavigationMenu items={item.children} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuLink
            href={item.slug}
            className={cn(navigationMenuTriggerStyle(), "justify-start")}
          >
            {item.title}
          </NavigationMenuLink>
        )}
      </li>
    ))}
  </ul>
);

export function NavigationMenus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navs.map((nav: Nav) => (
          <NavigationMenuItem key={nav.id}>
            {nav.children && nav.children.length > 0 ? (
              <>
                <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NestedNavigationMenu items={nav.children} />
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={nav.slug}
                className={navigationMenuTriggerStyle()}
              >
                {nav.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
