import { create } from "zustand";
import { User } from "../types/users";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";

export interface UserStore {
  user?: User;
  loading: boolean;
  update: (updatedUser: User) => void;
  register: (user: User) => Promise<void>;
}

export const userStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: undefined,
      loading: false,

      update: (updatedUser) => {
        set((state) => ({
          user: updatedUser,
        }));
      },

      register: async (user: User) => {
        set((state) => ({
          loading: true,
        }));
        const response = await axios.post("/api/users", user);
        set((state) => ({
          user: response.data,
          loading: false,
        }));
      },
    }),

    {
      name: "user", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ user: state.user }),
    }
  )
);
