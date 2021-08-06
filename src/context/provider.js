import AppContext from "./context";

const defaultState = {
  message: "conseguiii"
}

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{ message: defaultState.message}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider