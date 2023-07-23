import mongoose, { Document, Schema } from 'mongoose';

export interface IContent extends Document {
  _id: string;
  content: string;
}

const ContentSchema: Schema = new Schema({
  _id: { type: String, required: true },
  content: { type: String, required: true }
});

export default mongoose.model<IContent>('Content', ContentSchema);
