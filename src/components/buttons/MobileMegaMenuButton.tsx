import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { AuthButton } from "./AuthButton";
import { CartButton } from "./CartButton";
import { navs } from "@/lib/dummy/nav";
import { Nav } from "@/lib/types/nav";

const addSlugsToNavs = (navs: Nav[], parentSlug: string = ""): Nav[] => {
  return navs.map((nav) => {
    const currentSlug = parentSlug
      ? `category/${parentSlug}/${nav.slug}`
      : `${nav.slug}`;
    const newNav: Nav = { ...nav, slug: currentSlug };
    if (nav.children) {
      newNav.children = addSlugsToNavs(nav.children, currentSlug);
    }
    return newNav;
  });
};

export const MobileMegaMenuButton = () => {
  const [open, setOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<Nav[][]>([
    addSlugsToNavs(navs),
  ]);
  const [currentLevel, setCurrentLevel] = useState(0);

  const currentNavs = navigationStack[currentLevel];
  const navClass =
    "w-full justify-between btn-hover-light text-left py-8 px-0 uppercase border-b border-gray-200 text-xl";

  const navigateForward = (nav: Nav) => {
    if (nav.children && nav.children.length > 0) {
      setNavigationStack([
        ...navigationStack.slice(0, currentLevel + 1),
        nav.children,
      ]);
      setCurrentLevel(currentLevel + 1);
    } else {
      // Handle navigation to the category page
      console.log(`Navigating to category: ${nav.slug}`);
      // You can add your navigation logic here, e.g., using Next.js router
      // router.push(`/category/${nav.slug}`);
    }
  };

  const navigateBack = () => {
    if (currentLevel > 0) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent border-none">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center">
            <picture>
              <img
                src="https://utfs.io/f/KIQHcaf9Yatfb0KdldeK6azqOPVHBcdJhmLMgj3TSsYI8FyE"
                alt="logo"
              />
            </picture>
            <div className="flex items-center">
              <AuthButton className="text-black hover:text-white" />
              <CartButton className="text-black hover:text-white" />
              <DrawerClose asChild>
                <Button className="bg-transparent border-none shadow-none text-black hover:text-white">
                  <X />
                </Button>
              </DrawerClose>
            </div>
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex justify-between px-4 uppercase">
          <span>Hi Lorem</span>
          <span className="font-black">
            SmartBuy Points <span className="text-red-500">500</span>
          </span>
        </div>

        <div className="flex flex-col justify-between items-center p-4">
          {/* SEARCH BAR */}
          <Input placeholder="SEARCH" className="border-none bg-[#F0EEEC]" />

          {currentLevel > 0 && (
            <Button
              variant="ghost"
              className="w-full justify-start btn-hover-light text-left py-8 px-0 uppercase border-b border-gray-200 text-xl"
              onClick={navigateBack}
            >
              <ChevronLeft />
              Back
            </Button>
          )}

          {currentLevel === 0 ? (
            <Button
              variant="ghost"
              className={navClass}
              onClick={() =>
                navigateForward({
                  id: "departments",
                  title: "Departments",
                  slug: "departments",
                  children: currentNavs,
                })
              }
            >
              Departments
              <ChevronRight />
            </Button>
          ) : (
            currentNavs?.map((nav) => (
              <Button
                variant="ghost"
                className={`ps-4 ${navClass}`}
                key={nav.id}
                onClick={() => navigateForward(nav)}
              >
                {nav.title}
                {nav.children ? <ChevronRight /> : null}
              </Button>
            ))
          )}

          <Button variant="ghost" className={navClass}>
            Promotions
            <ChevronRight />
          </Button>

          <Button variant="ghost" className={navClass}>
            My Store: Pioneers Park
            <ChevronRight />
          </Button>

          <Button variant="ghost" className={navClass}>
            Our Lates Catalog
          </Button>

          <Button variant="ghost" className={navClass}>
            Log Out
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
