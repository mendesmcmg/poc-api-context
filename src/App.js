import "./App.css";
import AppProvider from "./context/provider";
import AppContext from "./context/context";
import Test from "./test1";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <header className="App-header">
          <AppContext.Consumer>
            {({ message, title }) => (
              <>
                <h1>{title}</h1>
                <h2>teste dentro do App {message}</h2>
              </>
            )} 
          </AppContext.Consumer>
          <Test />
        </header>
      </AppProvider>
    </div>
  );
}

export default App;
