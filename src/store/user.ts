import { create } from "zustand";

type UserState = {
  username: string;
};

type UserAction = {
  updateUsername: (username: UserState["username"]) => void;
};

export const usePersonStore = create<UserState & UserAction>((set) => ({
  username: "rifki",
  updateUsername: (username) => set(() => ({ username: username })),
}));
