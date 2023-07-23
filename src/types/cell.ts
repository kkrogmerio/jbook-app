export type CellTypes='code' | 'text';
export interface Cell{
    id:string;
    type:CellTypes;
    content:string;

}
export type Direction = "up" | "down";
export interface CellsState {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
      [key: string]: Cell;
    };
    editable:boolean;
  }
  
export  const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {},
    editable:true
  };