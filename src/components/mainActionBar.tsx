import { useActions } from "../hooks/useActions";
import "./mainActionBar.css";

const MainActionBar: React.FC = () => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="main-action-bar-wrapper">
      <div className="main-action-bar">
      <button className="button is-link is-medium is-rounded" onClick={() => {}}>
          SHARE
        </button>
        <button className="button is-danger is-medium is-rounded" onClick={() => {}}>
          RESET
        </button>
      </div>
    </div>
  );
};
export default MainActionBar;
