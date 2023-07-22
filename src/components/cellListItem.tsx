import { useDispatch } from "react-redux";
import { Cell } from "../state/cell";
import CodeCell from "./codeCell";
import TextEditor from "./textEditor";
import ActionBar from "./actionBar";
import "./cellListItem.css";
interface CellListItemProps {
  cell: Cell;
}
const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  const dispatch = useDispatch();
  let child: JSX.Element;
  if (cell.type === "code")
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  else
    child = (
      <>
        <ActionBar id={cell.id} />
        <TextEditor cell={cell} />
      </>
    );
  return <div className="cell-list-item">{child}</div>;
};
export default CellListItem;
