import mongoose, { Document, Schema } from "mongoose";
export type CellTypes = "code" | "text";
export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
export interface IContent extends Document {
  _id: string;
  cells: {
    data: { [key: string]: Cell };
    order: string[];
  };
  bundles?: {
    [key: string]: { code: string; err: string } | undefined;
  };
}
const ContentSchema: Schema = new Schema({
    _id: { type: String, required: true },
    cells: {
      data: { type: Schema.Types.Mixed, required: true },
      order: { type: [String], required: true },
    },
    bundles: {
      type: Schema.Types.Mixed,
    },
  });

export default mongoose.model<IContent>("Content", ContentSchema);
