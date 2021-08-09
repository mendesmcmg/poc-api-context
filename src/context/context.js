import { createContext } from "react";

const AppContext = createContext({
  messsage: null,
  changeMessage: () => {},
});

export default AppContext;
