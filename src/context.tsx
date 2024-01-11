// context.tsx
import { createContext } from "react";

type UserDataContextType = {
  userData: {
    isLogin: boolean;
    userPhoto: string;
    userName: string;
    userEmail: string;
    userId: string;
  };
  setUserData: (value: UserDataContextType['userData']) => void;
};

const UserData = createContext<UserDataContextType>({
  userData: {
    isLogin: false,
    userPhoto: '',
    userName: '',
    userEmail: '',
    userId: '',
  },
  setUserData: () => {},
});

export default UserData;