import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./addCell.css";
interface AddCellProps {
  previousCellId: string | null;
}
const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {
    const noOfCells = useTypedSelector((state)=>state.cells.order.length);
      const addCellClass = noOfCells > 0 ? "add-cell" : "add-cell full-opacity";
  const { insertCellAfter } = useActions();
  return (
    <div className={addCellClass}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, "code")}>
          <span className="icon is-small icon-margin" style={{ marginRight: 5 }}>
            <i className="fas fa-plus"></i>
          </span>
          Code
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, "text")}>
          <span className="icon is-small icon-margin" style={{ marginRight: 5 }}>
            <i className="fas fa-plus"></i>
          </span>
          Text
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default AddCell;
