import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/lib/component-types";

export function CartButton(props: ButtonProps) {
  return (
    <Button
      className={`bg-transparent border-none shadow-none ` + props.className}
    >
      <div className="flex lg:hidden">
        <ShoppingCart />
      </div>

      <div className="hidden lg:flex">
        <ShoppingCart className="mr-2 h-4 w-4" /> 3 |
      </div>
    </Button>
  );
}
