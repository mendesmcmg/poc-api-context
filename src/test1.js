import { useContext } from "react";
import AppContext from "./context/context";

function Test() {
  const { message, changeMessage } = useContext(AppContext);
  // const handleClick = () => {
  //   changeMessage("nova m");
  // };

  return (
    <>
      <h1>teste fora do App {message}</h1>
      <button onClick={() => changeMessage("nova m")}>mudar</button>
    </>
  );
}

export default Test;
