import { createAsyncThunk } from '@reduxjs/toolkit';
import bundle from '../../bundler'; 

export const createBundle = createAsyncThunk(
  'bundles/createBundle',
  async (input: { cellId: string, code: string }, thunkAPI) => {
    const result = await bundle(input.code);
    return { cellId: input.cellId, bundle: result };
  }
);
