import { Link } from "react-router-dom";
import { CartButton } from "./buttons/CartButton";
import { MobileMegaMenuButton } from "./buttons/MobileMegaMenuButton";
import { NavigationMenus } from "./header/NavigationMenus";
import { AuthDialog } from "./auth/AuthDialog";

export const Header = () => {
  return (
    <header className="w-full h-full flex flex-col items-center bg-[#101010] lg:bg-black">
      <div className="flex w-full h-32">
        {/* MOBILE */}
        <div className="w-full flex lg:hidden justify-between items-center px-4">
          {/* BRAND */}
          <Link to="/">
            <picture>
              <img
                src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png"
                alt="logo"
              />
            </picture>
          </Link>

          {/* BUTTONS */}
          <div className="flex justify-center items-center">
            <AuthDialog
              customClass={
                "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-primary/90 px-4 py-2"
              }
            />
            <CartButton className="text-white" />
            <MobileMegaMenuButton />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="container w-full hidden lg:flex justify-between items-center space-x-4 py-3 px-6 ">
          {/* BRAND */}
          <Link to="/">
            <picture>
              <img
                src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png"
                alt="logo"
              />
            </picture>
          </Link>

          <div className="flex flex-col space-y-3 w-full">
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

              <AuthDialog />

              <div>Smartbuy points</div>
            </div>
          </div>
        </div>
      </div>

      {/* NAV MENUS */}
      <NavigationMenus />
    </header>
  );
};
