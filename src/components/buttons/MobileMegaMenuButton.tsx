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
import { ChevronRight, Menu, X } from "lucide-react";
import { AuthButton } from "./AuthButton";
import { CartButton } from "./CartButton";
import { navs } from "@/lib/dummy/nav";
import { Nav } from "@/lib/types/nav";

export const MobileMegaMenuButton = () => {
  const navMenus: Nav[] = navs;
  const [open, setOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState<Nav[]>(navMenus);

  const openNavigations = (navs: Nav[]) => {
    setCurrentNav(navs);
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
          {currentNav.map((nav) => (
            <Button key={nav.id} onClick={() => openNavigations(nav.children)}>
              {nav.title}
              {nav.children && <ChevronRight />}
            </Button>
          ))}
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};
