import { createContext } from "react";

const AppContext = createContext({
  messsage: null,
  changeMessage: () => {},
  title: null,
  changeTitle: () => {}
});

export default AppContext;
