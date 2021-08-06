import AppContext from "./context";

const initialState = {
  message: "conseguiii"
}

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{ message: initialState.message}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider