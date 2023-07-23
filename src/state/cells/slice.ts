import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell, CellTypes, Direction, initialState} from '../../types/cell';



export const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    moveCell: (state, action: PayloadAction<{id: string, direction: Direction}>) => {
      const { id, direction } = action.payload;
      const index = state.order.findIndex((cellId) => cellId === id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = id;
    },
    deleteCell: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
      state.order = state.order.filter((cellId) => cellId !== action.payload);
    },
    insertCellAfter: (state, action: PayloadAction<{id: string | null, type: CellTypes}>) => {
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: randomId(),
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex((cellId) => cellId === action.payload.id);

      if (foundIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(foundIndex + 1, 0, cell.id);
      }
    },
    updateCell: (state, action: PayloadAction<{id: string, content: string}>) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
    },
    removeCells:(state,)=>{
      state.order=[];
      state.data={};
      state.loading=false;
      state.error=null;
    }

  },
});

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export const { moveCell, deleteCell, insertCellAfter, updateCell,removeCells } = cellsSlice.actions;

export default cellsSlice.reducer;
