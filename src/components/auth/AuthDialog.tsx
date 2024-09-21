import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import { useState } from "react";

export const AuthDialog = () => {
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
      <DialogTrigger className="flex space-x-3">
        <User /> <span>Login</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
