import { useAppDispatch } from "../state";
import { useMemo } from "react";
import { createBundle } from "../state/bundles/thunk";
import { moveCell, deleteCell, insertCellAfter, updateCell,removeCells } from "../state/cells/slice";
import { removeBundles } from "../state/bundles/slice";
import { CellTypes, Direction } from "../state";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => ({
    createBundle: ( cellId: string, code: string ) => dispatch(createBundle({cellId, code})),
    moveCell: ( id: string, direction: Direction ) => dispatch(moveCell({id,direction})),
    deleteCell: (payload: string) => dispatch(deleteCell(payload)),
    insertCellAfter: ( id: string | null, type: CellTypes ) => dispatch(insertCellAfter({id,type})),
    updateCell: ( id: string, content: string ) => dispatch(updateCell({id,content})),
    resetContent:()=>{dispatch(removeBundles());dispatch(removeCells());}
  }), [dispatch]);
};