import { useCallback, useState } from "react";
import AppContext from "./context";

const defaultState = {
  message: "conseguiii",
};

const AppProvider = ({ children }) => {
  const [message, setMessage] = useState(defaultState.message);

  const changeMessage = useCallback((newMessage) => {
    setMessage(newMessage);
  }, []);

  return (
    <AppContext.Provider value={{ message, changeMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
