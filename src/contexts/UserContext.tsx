import { createContext } from "react";

const UserContext = createContext({
  user: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    type: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      type: string;
    }
  ) => {},
});

export default UserContext;
