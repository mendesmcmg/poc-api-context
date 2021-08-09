import { useContext } from "react";
import AppContext from "./context/context";

function Test() {
  const { message, changeMessage, title, changeTitle } = useContext(AppContext);

  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => changeTitle("mudou")}>mudar titulo</button>
      <h2>teste fora do App {message}</h2>
      <button onClick={() => changeMessage("nova mensagem")}>
        mudar mensagem
      </button>
    </>
  );
}

export default Test;
