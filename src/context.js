import { createContext } from "react";

const UserContext = createContext({
  name: '',
  email: '',
  password: '',
  balance: 0,
  updateBalance: (newBalance = 0) => {},
  updateEmail: (newEmail = '') => {},
  updatePassword: (newPassword = '') => {},
  updateName: (newName = '') => {},
});

export default UserContext;

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;
