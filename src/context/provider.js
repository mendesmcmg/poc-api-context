import { useCallback, useState } from "react";
import AppContext from "./context";

const defaultState = {
  message: "conseguiii",
  title: "sera que",
};

const AppProvider = ({ children }) => {
  const [message, setMessage] = useState(defaultState.message);
  const [title, setTitle] = useState(defaultState.title);

  const changeTitle = useCallback((newTitle) => {
    setTitle(newTitle);
  }, []);

  const changeMessage = useCallback((newMessage) => {
    setMessage(newMessage);
  }, []);

  return (
    <AppContext.Provider value={{ message, changeMessage, title, changeTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
