import { UserType } from "../UserType";

export type UserContextType = {
  currentUser: UserType | null;
  userModifier: (user: UserType | null) => void;
  updateUserEmail: (userId: number, email: string) => void;
};
