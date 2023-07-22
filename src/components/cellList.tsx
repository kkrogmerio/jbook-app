import { useTypedSelector } from "../hooks/useTypedSelector";
import { Fragment } from "react"; 
import CellListItem from "./cellListItem";
import AddCell from "./addCell";
import './cellList.css'
const CellList: React.FC = () => {
  const orderedCells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });
  const renderedCells = orderedCells.map((cell) => (
    <Fragment key={cell.id}>
    
      <CellListItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment >
  ));
  return (
    <div className="cell-list">
        <AddCell previousCellId={null} />
      {renderedCells}
      
    </div>
  );
};
export default CellList;
