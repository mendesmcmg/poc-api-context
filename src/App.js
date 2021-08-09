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
            {({ message }) => <h1>teste dentro do App {message}</h1>}
          </AppContext.Consumer>
          <Test />
        </header>
      </AppProvider>
    </div>
  );
}

export default App;
