import { create } from "zustand";
import { User } from "../types/users";

interface UserStore {
  users: User[];
  loggedUser?: User;
  addUser: (user: User) => void;
  updateUser: (updatedUser: User) => void;
  deleteUser: (id: string) => void;
  //   getUserById: (id: string) => User | undefined | void;
}

export const usersStore = create<UserStore>((set) => ({
  users: [],
  loggedUser: undefined,

  addUser: (user) => set((state) => ({ users: [...state.users, user] })),

  updateUser: (updatedUser) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    }));
  },

  deleteUser: (id) => {
    set((state) => ({ users: state.users.filter((user) => user.id !== id) }));
  },

  //   getUserById: (id) => {
  //     set((state) => ({
  //       loggedUser: state.users.find((user) => user.id === id),
  //     }));
  //   },
}));
