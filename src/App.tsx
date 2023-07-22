import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CodeCell from "./components/codeCell";
import TextEditor from "./components/textEditor";
import * as ReactDOMClient from "react-dom/client";
import { useEffect } from "react";
import { store } from "./state";
import { Provider } from "react-redux";
import CellList from "./components/cellList";
import MainActionBar from "./components/mainActionBar";
import { useTypedSelector } from "./hooks/useTypedSelector";
const App = () => {
  const noOfCells = useTypedSelector((state) => state.cells.order.length);

  return (
    <>
      {noOfCells > 0 && <MainActionBar />}
      <CellList />
    </>
  );
};

export default App;
