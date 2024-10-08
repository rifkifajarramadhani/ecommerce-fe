import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { User } from "lucide-react";

type AuthDialogProps = {
  customClass?: string;
};

export const AuthDialog = (props: AuthDialogProps) => {
  const { customClass } = props;
  const titles = {
    login: "Login or Register",
    register: "Create an account",
    forgot_password: "Forgot your password?",
    forgot_password_sent: "",
    reset_password: "Reset your password",
    tfa: "Two-Factor Authentication",
  };
  const [title, setTitle] = useState<string>(titles["login"]);
  const [formState, setFormState] = useState<string>("login");

  return (
    <Dialog>
      <DialogTrigger className="flex items-center space-x-3 text-white">
        <span className={customClass}>
          <User />
        </span>
        <span className="hidden lg:block">Login</span>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {formState == "login" && <LoginForm />}
      </DialogContent>
    </Dialog>
  );
};
