import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState} from '../../types/bundle';
import { createBundle } from './thunk';

export const bundlesSlice = createSlice({
  name: 'bundles',
  initialState,
  reducers: {
    removeBundles: (state) => {
      for(let key in state) {
        if(state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createBundle.pending, (state, action) => {
      state[action.meta.arg.cellId] = {
        loading: true,
        code: '',
        err: '',
      };
    });
    builder.addCase(createBundle.fulfilled, (state, action) => {
      state[action.payload.cellId] = {
        loading: false,
        code: action.payload.bundle.code,
        err: action.payload.bundle.err,
      };
    });
  },
});


export const {removeBundles}=bundlesSlice.actions;
export default bundlesSlice.reducer;
