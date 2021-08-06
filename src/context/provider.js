import AppContext from "./context";

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{ message: "conseguii"}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider