import { createContext } from 'react';

import { User } from '../interfaces/user';

export const UserContext = createContext<{
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}>({
  users: [],
  setUsers: () => {},
});
