import { useContext } from "react";
import AppContext from "./context/context";

const Test = () => {
  const {message} = useContext(AppContext)

  return <h1>teste fora do app {message}</h1>;
};

export default Test
