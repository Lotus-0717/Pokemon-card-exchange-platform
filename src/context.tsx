// context.tsx
import { createContext } from "react";

type UserDataContextType = {
  Data: {
    isLogin: boolean;
    userPhoto: string;
    userName: string;
    userEmail: string;
    userId: string;
  };
  setUserData: (value: UserDataContextType['Data']) => void;
};

const UserData = createContext<UserDataContextType>({
  Data: {
    isLogin: false,
    userPhoto: '',
    userName: '',
    userEmail: '',
    userId: '',
  },
  setUserData: () => {},
});

export default UserData;