import { User } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonProps } from "@/lib/component-types";

export const AuthButton = (props: ButtonProps) => {
  return (
    <Button
      className={`bg-transparent border-none shadow-none ` + props.className}
    >
      <User />
    </Button>
  );
};
