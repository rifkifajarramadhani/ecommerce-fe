import { AuthButton } from "./buttons/AuthButton";
import { CartButton } from "./buttons/CartButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { MobileMegaMenuButton } from "./buttons/MobileMegaMenuButton";

export const Header = () => {
  return (
    <header className="w-full h-32 flex items-center bg-[#101010] lg:bg-black">
      {/* MOBILE */}
      <div className="w-full flex lg:hidden justify-between items-center px-4">
        {/* BRAND */}
        <picture>
          <img
            src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png"
            alt="logo"
          />
        </picture>

        {/* BUTTONS */}
        <div>
          <AuthButton className="text-white" />
          <CartButton className="text-white" />
          <MobileMegaMenuButton />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="container hidden lg:flex justify-between items-center m-auto">
        {/* BRAND */}
        <picture>
          <img
            src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png"
            alt="logo"
          />
        </picture>

        <div className="flex flex-col w-full">
          {/* SEARCH AND CART */}
          <div className="flex w-full justify-between">
            {/* TODO create search bar component */}
            <input type="text" name="search" id="" className="w-full" />
            {/* TODO create search bar component */}

            {/* TODO create proper button component */}
            <CartButton />
            {/* TODO create proper button component */}
          </div>

          {/* AUTH AND STUFF */}
          <div className="flex justify-between items-center text-white">
            <div>Store</div>

            <div>Track order layout</div>

            <div>Auth</div>

            <div>Smartbuy points</div>
          </div>

          {/* NAV MENUS */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
