import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
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

export const MobileMegaMenuButton = () => {
  const [open, setOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<Nav[][]>([navs]);
  const [currentLevel, setCurrentLevel] = useState(0);

  const currentNavs = navigationStack[currentLevel];

  const navigateForward = (nav: Nav) => {
    if (nav.children) {
      setNavigationStack([
        ...navigationStack.slice(0, currentLevel + 1),
        nav.children,
      ]);
      setCurrentLevel(currentLevel + 1);
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
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle></DrawerTitle>
          <picture>
            <img
              src="https://utfs.io/f/KIQHcaf9Yatfb0KdldeK6azqOPVHBcdJhmLMgj3TSsYI8FyE"
              alt="logo"
            />
          </picture>
          <div className="flex items-center">
            <AuthButton className="text-black" />
            <CartButton className="text-black" />
            <DrawerClose asChild>
              <Button className="bg-transparent border-none shadow-none text-black">
                <X />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="flex flex-row justify-between items-center">
          <p>Hi Lorem</p>
          <p>SmartBuy Points 500</p>
        </div>
        <DrawerDescription className="flex flex-row justify-between items-center">
          <Input />
        </DrawerDescription>
        <DrawerDescription className="flex flex-col justify-between items-center">
          {currentLevel > 0 && (
            <Button
              variant="ghost"
              className="w-full btn-hover-light text-left py-6 uppercase border-b border-gray-200 text-xl"
              onClick={navigateBack}
            >
              <ChevronLeft />
              Back
            </Button>
          )}
          {currentLevel === 0 ? (
            <Button
              variant="ghost"
              className="w-full btn-hover-light text-left py-6 uppercase border-b border-gray-200 text-xl"
              onClick={() =>
                navigateForward({
                  id: "departments",
                  title: "Departments",
                  children: navs,
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
                className="w-full btn-hover-light text-left py-6 uppercase border-b border-gray-200 text-xl"
                key={nav.id}
                onClick={() => navigateForward(nav)}
              >
                {nav.title}
                {nav.children && <ChevronRight />}
              </Button>
            ))
          )}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};
