import { useActions } from "../mainHooks/useActions";
import { useTypedSelector } from "../mainHooks/useTypedSelector";
import "./actionBar.css";
interface ActionBarProps {
  id: string;
}
const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  const orderedCells = useTypedSelector((state) => state.cells.order);
  let shouldUseUpArrow = !(orderedCells[0] == id);
  let shouldUseDownArrow = !(orderedCells[orderedCells.length - 1] == id);
  if (orderedCells.length == 1) {
    shouldUseDownArrow = false;
    shouldUseUpArrow = false;
  }
  return (
    <div className="action-bar">
      {shouldUseUpArrow && (
        <button
          className="button is-primary is-small"
          onClick={() => moveCell(id, "up")}>
          <span className="icon">
            <i className="fas fa-arrow-up"></i>
          </span>
        </button>
      )}
      {shouldUseDownArrow && (
        <button
          className="button is-primary is-small"
          onClick={() => moveCell(id, "down")}>
          <span className="icon">
            <i className="fas fa-arrow-down"></i>
          </span>
        </button>
      )}
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}>
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  );
};
export default ActionBar;
